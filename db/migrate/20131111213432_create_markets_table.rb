class CreateMarketsTable < ActiveRecord::Migration
    def change
    create_table :markets do |t|

      t.string :market_name
      t.string :location
      t.string :address_line_1
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :market_link
      t.string :operation_hours
      t.string :operation_season
      t.float :latitude
      t.float :longitude
      t.string :neighborhood
      t.string :days_between_markets
      t.string :season_date_range

      t.timestamps
    end
  end
end
