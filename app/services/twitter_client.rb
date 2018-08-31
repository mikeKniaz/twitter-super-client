class TwitterClient
  include HTTParty
  TWITTER_TOKEN = Rails.application.secrets.twitter_token

  def initialize
    @headers = {
      'Authorization' => "Bearer #{TWITTER_TOKEN}"
    }
  end

  def get_twitts(key_words)
    response = HTTParty.get("https://api.twitter.com/1.1/search/tweets.json?q=#{key_words}", headers: @headers)
    TwittsSerializer.serialize_twitts(response)
  end
end
