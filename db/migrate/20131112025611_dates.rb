class Dates < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :market_id
      t.date :date_open
      t.integer :week_number

      t.timestamps
    end
  end
end
