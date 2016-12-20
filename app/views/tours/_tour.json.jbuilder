json.extract! tour, :id, :tour_name, :price, :num_capacity, :created_at, :updated_at
json.url tour_url(tour, format: :json)
json.breweries tour.breweries
json.tour_sessions tour.tour_sessions
