class Favorite < ApplicationRecord
  validates :giphy_id, presence: true, uniqueness: true
  validates :height, presence: true
  validates :width, presence: true
  validates :url, presence: true
end
