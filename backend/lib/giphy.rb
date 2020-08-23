class Giphy
  include HTTParty

  base_uri 'https://api.giphy.com/v1/gifs'

  attr_reader :api_key

  def initialize(api_key)
    @api_key = api_key
  end

  # Serach url for Giphy API
  def search(query)
    url = "/search?q=#{query}&api_key=#{@api_key}"
    request url
  end

  private

  # Send request to Giphy API
  def request(url)
    self.class.get url
  rescue StandardError => e
    puts "Exception when calling GiphyApi: #{e}"
  end
end