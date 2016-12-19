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

class Brewery < ActiveRecord::Base
  has_and_belongs_to_many :tours
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

end

