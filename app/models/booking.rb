# == Schema Information
#
# Table name: bookings
#
#  id            :integer          not null, primary key
#  name_last     :string
#  name_first    :string
#  date          :datetime
#  session_id    :integer
#  number_people :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ActiveRecord::Base
  belongs_to :tour_session
end
