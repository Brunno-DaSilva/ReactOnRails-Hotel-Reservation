class CreateUserReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_reservations do |t|
      t.string :userName
      t.string :phoneNumber
      t.string :email
      t.string :address
      t.string :card
      t.string :cvc
      t.string :checkIn
      t.string :checkOut
      t.string :roomName

      t.timestamps
    end
  end
end
