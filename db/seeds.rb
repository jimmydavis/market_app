require "csv"

Market.delete_all

# TODO -- may need to change path to get this to work in Heroku
file = File.open("/Users/jamesmdavis5/ga_wdi/heroku/project_two/market_app/db/20131111_nycmarket.csv","r")
# file = File.open("/Users/thomasmetzger/ga_wdi/heroku/market_app/db/20131111_nycmarket.csv","r")

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

# this code will query the newly created Market table data to retrieve data that will be used to create the data that will seed the Date table
# connection = ActiveRecord::Base.connection();
# sql_result = connection.execute("select id, season_date_range, days_between_markets from markets;")




end

