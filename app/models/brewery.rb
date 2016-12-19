class Brewery < ActiveRecord::Base
has_and_belongs_to_many :tours
geocoded_by :address
end
