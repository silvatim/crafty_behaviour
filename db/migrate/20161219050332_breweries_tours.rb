class BreweriesTours < ActiveRecord::Migration
  def change
    create_table :breweries_tours, :id => false do |t|
    t.integer :brewery_id
    t.integer :tour_id
  end
  end
end
