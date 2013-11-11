class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email, :latitude, :longitude

  has_secure_password


  validates :email, :presence => true, :uniqueness => true
  validates :password, :password_confirmation, :presence => true
  validates :password, :password_confirmation, :length => { in: 6..20 }
end
