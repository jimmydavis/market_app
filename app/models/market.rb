class Market < ActiveRecord::Base
  attr_accessible :market_name, :location, :address_line_1, :city, :state, :zip_code, :market_link, :operation_hours, :operation_season, :latitude, :longitude, :neighborhood, :days_between_markets, :season_date_range

  has_many :market_dates

end
