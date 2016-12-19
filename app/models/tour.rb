class Tour < ActiveRecord::Base
  has_many :tour_sessions, dependent: :destroy
  has_many_and_belongs_to :breweries
end
