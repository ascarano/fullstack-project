class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.order(created_at: :desc)
    render json: @favorites
  end

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:url, :title, :height, :width, :giphy_id)
  end
end