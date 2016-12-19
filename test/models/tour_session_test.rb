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

require 'test_helper'

class TourSessionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
