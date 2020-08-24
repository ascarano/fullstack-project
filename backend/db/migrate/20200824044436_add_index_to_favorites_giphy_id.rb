class AddIndexToFavoritesGiphyId < ActiveRecord::Migration[6.0]
  def change
    add_index :favorites, :giphy_id, unique: true
  end
end
