# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_05_011320) do

  create_table "extras", force: :cascade do |t|
    t.string "extras1"
    t.string "extras2"
    t.string "extras3"
    t.string "extras4"
    t.string "extras5"
    t.string "extras6"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hotel_rooms", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "roomType"
    t.integer "price"
    t.integer "size"
    t.integer "capacity"
    t.boolean "pets"
    t.boolean "breakfast"
    t.boolean "featured"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "roomImage"
    t.string "roomDetails1"
    t.string "roomDetails2"
    t.string "roomDetails3"
    t.string "roomDetails4"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "type"
    t.integer "price"
    t.integer "size"
    t.integer "capacity"
    t.boolean "pets"
    t.boolean "breakfast"
    t.boolean "featured"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_reservations", force: :cascade do |t|
    t.string "userName"
    t.string "phoneNumber"
    t.string "email"
    t.string "address"
    t.string "card"
    t.string "cvc"
    t.string "checkIn"
    t.string "checkOut"
    t.string "roomName"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
