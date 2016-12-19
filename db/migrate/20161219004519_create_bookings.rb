class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.string :name_last
      t.string :name_first
      t.datetime :date
      t.integer :session_id
      t.integer :number_people

      t.timestamps null: false
    end
  end
end
