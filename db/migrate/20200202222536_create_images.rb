class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :roomImage
      t.string :roomDetails1
      t.string :roomDetails2
      t.string :roomDetails3
      t.string :roomDetails4

      t.timestamps
    end
  end
end


