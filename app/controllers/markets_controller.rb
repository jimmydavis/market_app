 class MarketsController < ApplicationController


  # GET /markets
  # GET /markets.json
  def index
    # @markets = Market.find_by_sql("SELECT markets.id AS markets_id, markets.market_name, markets.location, markets.address_line_1, markets.city, markets.state, markets.zip_code, markets.market_link, markets.operation_hours, markets.operation_season, markets.latitude, markets.longitude, markets.neighborhood, market_dates.id AS market_dates_id, market_dates.date_open, market_dates.week_number FROM markets JOIN market_dates ON markets.id = market_dates.market_id order by market_dates.date_open;")
    @markets = Market.all_markets

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @markets }
    end
  end



  # GET /markets/1
  # GET /markets/1.json
  def show
    @market = Market.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @market }
    end
  end

end
