class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :address
      t.float :longitude
      t.float :latitude
      t.string :image
      t.text :description
      t.string :website

      t.timestamps null: false
    end
  end
end
