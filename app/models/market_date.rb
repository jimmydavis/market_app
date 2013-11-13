class MarketDate < ActiveRecord::Base
  attr_accessible :market_id, :date_open, :week_number

  belongs_to :market

end

