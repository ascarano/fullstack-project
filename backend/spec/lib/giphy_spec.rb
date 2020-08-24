require 'rails_helper'
require 'giphy'

describe Giphy do
  let(:api_key) { "API_KEY" }

  describe "#initialize" do
    it "initializes with an api key" do
      expect(described_class.new(api_key).api_key).to eq api_key
    end
  end

  describe "search" do
    context "successful search request" do
      let(:response) do
        {
          "data" => [
            {
              "type" => "gif",
              "id" => "10bKPDUM5H7m7u",
              }
            ]
          }
      end
      let(:query) { "superman" }

      before do
        stub_request(:get, "https://api.giphy.com/v1/gifs/search?api_key=#{api_key}&q=#{query}").
             to_return(status: 200,
                       body: response.to_json,
                       headers: { "Content-Type" => "application/json" })
      end

      subject { described_class.new(api_key) }

      it "performs the search for gifs" do
        expect(subject.search(query).parsed_response).to eq response
      end
    end

    context "search request raises error" do
      before do
        stub_request(:get, "https://api.giphy.com/v1/gifz/").to_raise(StandardError)
      end

      subject { described_class.new(api_key) }

      it "raises an error" do
        expect{subject.search(query).parsed_response}.to raise_error(StandardError)
      end
    end
  end
end