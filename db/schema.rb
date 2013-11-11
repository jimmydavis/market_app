# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131111213432) do

  create_table "markets", :force => true do |t|
    t.string   "market_name"
    t.string   "location"
    t.string   "address_line_1"
    t.string   "city"
    t.string   "state"
    t.integer  "zip_code"
    t.string   "market_link"
    t.string   "operation_hours"
    t.string   "operation_season"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "neighborhood"
    t.string   "days_between_markets"
    t.string   "season_date_range"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
