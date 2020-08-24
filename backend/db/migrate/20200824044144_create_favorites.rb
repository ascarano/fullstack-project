class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.string :giphy_id
      t.string :url
      t.string :title
      t.string :width
      t.string :height

      t.timestamps
    end
  end
end
