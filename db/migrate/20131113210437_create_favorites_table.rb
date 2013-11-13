class CreateFavoritesTable < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :market_id
      t.integer :user_id
      t.text :comments

      t.timestamps
    end
  end
end
