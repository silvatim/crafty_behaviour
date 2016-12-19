class TourSession < ActiveRecord::Base
  has_many :bookings, dependent: :destroy
  belongs_to :tour
end
