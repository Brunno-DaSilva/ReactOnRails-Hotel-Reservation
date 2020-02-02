class CreateExtras < ActiveRecord::Migration[6.0]
  def change
    create_table :extras do |t|
      t.string :extras1
      t.string :extras2
      t.string :extras3
      t.string :extras4
      t.string :extras5
      t.string :extras6

      t.timestamps
    end
  end
end
