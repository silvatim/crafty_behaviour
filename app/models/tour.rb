# == Schema Information
#
# Table name: tours
#
#  id           :integer          not null, primary key
#  tour_name    :string
#  price        :float
#  num_capacity :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Tour < ActiveRecord::Base
  has_many :tour_sessions, dependent: :destroy
  has_and_belongs_to_many :breweries
end
