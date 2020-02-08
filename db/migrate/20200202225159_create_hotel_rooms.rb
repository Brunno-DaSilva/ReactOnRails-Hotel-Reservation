class CreateHotelRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :hotel_rooms do |t|
      t.string :name
      t.string :slug
      t.string :roomType
      t.integer :price
      t.integer :size
      t.integer :capacity
      t.boolean :pets
      t.boolean :breakfast
      t.boolean :featured
      t.string :description

      t.timestamps
    end
  end
end
