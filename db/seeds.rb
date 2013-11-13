require "csv"

Market.delete_all
MarketDate.delete_all

file = File.open("db/20131112_nycmarket.csv","r")

CSV.parse(file, :headers => true) do |row|
  Market.create! ({
    :market_name => row["market_name"],
    :location => row["location"],
    :address_line_1 => row["address_line_1"],
    :city => row["city"],
    :state => row["state"],
    :zip_code => row["zip"],
    :market_link => row["market_link"],
    :operation_hours => row["operation_hours"],
    :operation_season => row["operation_season"],
    :latitude => row["latitude"],
    :longitude => row["longitude"],
    :neighborhood => row["neighborhood"],
    :days_between_markets => row["days_between_markets"],
    :season_date_range => row["season_date_range"]})
end

# this code will query the newly created Market table data to retrieve data that will be used to create the data that will seed the Date table
connection = ActiveRecord::Base.connection();
sql_markets_result = connection.execute("select id, season_date_range, days_between_markets from markets;")

# creates an array of arrays that hold start and stop dates
sql_markets = sql_markets_result.map do |season|
  dates = season["season_date_range"].split(" - ")
  season[:start_date] = Date.parse(dates[0] + " 2013")
  season[:end_date] = Date.parse(dates[1] + " 2013")
  season[:day_interval_array] = season["days_between_markets"].split("|").map {|day_number| day_number}
  season
end

# This creates a hash object with :market_id => value, :date_open => value, :week_number => value that can be passed into the MarketDates.create function
sql_markets.each do |market|
  new_db_entry = {}
  new_db_entry[:market_id] = market["id"].to_i
  # loop over days array do
  # adds days from the days interval to the start date until the start_date equals the end_date
  until (market[:start_date] >= market[:end_date])
    market[:day_interval_array].each do |i|
      new_db_entry[:date_open] = (market[:start_date] += i.to_i.days)
      new_db_entry[:week_number] = new_db_entry[:date_open].strftime("%W").to_i
      MarketDate.create(new_db_entry)
    end
  end
end


# this code adds in the one date for the market at Ninth Ave., Balsley ParkBtw 56th & 57th Sts.
connection = ActiveRecord::Base.connection();
single_market_result = connection.execute("select id from markets where location = 'Ninth Ave., Balsley ParkBtw 56th & 57th Sts.';")

single_market = {market_id: single_market_result.to_a[0]["id"].to_i}
single_market[:date_open] = Date.parse("April 20 2013")
single_market[:week_number] = single_market[:date_open].strftime("%W").to_i
MarketDate.create(single_market)



