json.extract! brewery, :id, :brewery_name, :address, :longitude, :latitude, :image, :description, :website, :created_at, :updated_at
json.url brewery_url(brewery, format: :json)
