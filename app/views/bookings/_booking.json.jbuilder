json.extract! booking, :id, :name_last, :name_first, :date, :session_id, :number_people, :created_at, :updated_at
json.url booking_url(booking, format: :json)