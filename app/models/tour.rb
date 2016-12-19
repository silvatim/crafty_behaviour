class Tour < ActiveRecord::Base
  has_many :tour_sessions, dependent: :destroy
  has_and_belongs_to_many :breweries
end
