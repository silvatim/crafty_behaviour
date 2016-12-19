class Brewery < ActiveRecord::Base
has_many_and_belongs_to :tours
end
