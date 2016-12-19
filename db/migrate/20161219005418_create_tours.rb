class CreateTours < ActiveRecord::Migration
  def change
    create_table :tours do |t|
      t.string :tour_name
      t.float :price
      t.integer :num_capacity

      t.timestamps null: false
    end
  end
end
