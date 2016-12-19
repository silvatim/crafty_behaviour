class CreateTourSessions < ActiveRecord::Migration
  def change
    create_table :tour_sessions do |t|
      t.datetime :tour_date
      t.integer :tour_id
      t.integer :number_booked

      t.timestamps null: false
    end
  end
end
