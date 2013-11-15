class Market < ActiveRecord::Base
  attr_accessible :market_name, :location, :address_line_1, :city, :state, :zip_code, :market_link, :operation_hours, :operation_season, :latitude, :longitude, :neighborhood, :days_between_markets, :season_date_range

  has_many :market_dates
  has_many :users, through: :favorites

  def self.all_markets
    if @markets_in_a_year.nil?
      markets = Market.find_by_sql("SELECT markets.id AS markets_id, markets.market_name, markets.location, markets.address_line_1, markets.city, markets.state, markets.zip_code, markets.market_link, markets.operation_hours, markets.operation_season, markets.latitude, markets.longitude, markets.neighborhood, market_dates.id AS market_dates_id, market_dates.date_open, market_dates.week_number FROM markets JOIN market_dates ON markets.id = market_dates.market_id order by market_dates.date_open;")

      # for each market
      #   figure out what day of the year it occurs on
      #   put the market object in the array element of the same index

      @markets_in_a_year = []
      366.times do |i|
        @markets_in_a_year[i] = []
      end

      markets.each do |market|
        date_string = market.date_open
        date = Date.parse(date_string)
        if date.year == 2013
          day_of_the_year = date.yday
          @markets_in_a_year[day_of_the_year] << market
        end
      end
    end
    @markets_in_a_year
  end

  # def self.update
  #   @all_markets = # THE SAME SQL CALL
  # end

end




