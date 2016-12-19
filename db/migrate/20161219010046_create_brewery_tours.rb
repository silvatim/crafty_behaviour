class CreateBreweryTours < ActiveRecord::Migration
  def change
    create_table :brewery_tours do |t|
      t.integer :brewery_id
      t.integer :tour_id

      t.timestamps null: false
    end
  end
end
