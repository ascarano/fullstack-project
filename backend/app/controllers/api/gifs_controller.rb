require "giphy"

class Api::GifsController < ApplicationController
  def search
    @gifs = giphy.search(params[:search])
    if @gifs.nil?
      render json: { error: "Can't process request" }, status: :bad_request
    else
      render json: @gifs, status: :ok
    end
  end

  private

  def giphy
    @giphy ||= Giphy.new(Rails.application.credentials.giphy_api_key)
  end
end