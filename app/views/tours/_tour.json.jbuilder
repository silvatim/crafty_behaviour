json.extract! tour, :id, :tour_name, :price, :num_capacity, :created_at, :updated_at
json.url tour_url(tour, format: :json)
json.brewery tour.brewery
