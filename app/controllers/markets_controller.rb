 class MarketsController < ApplicationController


  # GET /markets
  # GET /markets.json
  def index
    @markets = Market.all

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
