class Booking < ActiveRecord::Base
  belongs_to :tour_session
end
