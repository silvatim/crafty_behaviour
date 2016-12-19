# == Schema Information
#
# Table name: breweries
#
#  id           :integer          not null, primary key
#  brewery_name :string
#  address      :string
#  longitude    :float
#  latitude     :float
#  image        :string
#  description  :text
#  website      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class BreweryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
