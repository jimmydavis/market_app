require "csv"

file = File.open("20131111_nycmarket.csv","r")

CSV.parse(file, :headers => true) do |row|
  Market.create! (
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
    :season_date_range => row["season_date_range"])
end


