class MarketDates < ActiveRecord::Migration
  def change
    create_table :market_dates do |t|
      t.integer :market_id
      t.date :date_open
      t.integer :week_number

      t.timestamps
    end
  end
end
