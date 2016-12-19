class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :address
      t.float :long
      t.float :lat
      t.string :image
      t.text :description
      t.string :website

      t.timestamps null: false
    end
  end
end
