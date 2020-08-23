require 'rails_helper'

describe Api::GifsController, type: :controller do
  let(:response_json) { JSON.parse response.body }
  let(:gifs) do
    {
      "data" => [
        {
          "type" => "gif",
          "id" => "10bKPDUM5H7m7u",
        }
      ]
    }
  end
  let(:error_response) { { "error" => "Can't process request" } }

  describe "#search" do
    context "with a valid search request" do
      before do
        allow_any_instance_of(Giphy).to receive(:search).with("superstar").and_return(gifs)
      end

      it "returns gifs" do
        get :search, params: { search: "superstar" }
        expect(response_json).to eq(gifs)
      end
    end

    context "giphy fails to respond" do
      before do
        allow_any_instance_of(Giphy).to receive(:search).with("oh no!").and_return(nil)
      end

      it "renders an error" do
        get :search, params: { search: "oh no!" }
        expect(response_json).to eq(error_response)
      end
    end
  end
end

