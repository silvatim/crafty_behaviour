# == Schema Information
#
# Table name: tour_sessions
#
#  id            :integer          not null, primary key
#  tour_date     :datetime
#  tour_id       :integer
#  number_booked :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class TourSession < ActiveRecord::Base
  has_many :bookings, dependent: :destroy
  belongs_to :tour
end
