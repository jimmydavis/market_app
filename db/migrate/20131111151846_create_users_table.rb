class CreateUsersTable < ActiveRecord::Migration
    def change
    create_table :users do |t|

      t.string :first_name
      t.string :last_name
      t.string :email
      t.float :latitude
      t.float :longitude

      t.string :password_digest
      t.timestamps
    end
  end
end
