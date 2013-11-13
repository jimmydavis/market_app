class Favorite < ActiveRecord::Base
  attr_accessible :market_id, :user_id, :comments

  belongs_to :user, :dependent => :destroy
  belongs_to :market
end
