json.extract! tour_session, :id, :tour_date, :tour_id, :number_booked, :created_at, :updated_at
json.url tour_session_url(tour_session, format: :json)