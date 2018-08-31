class TwittsSerializer
  def self.serialize_twitts(twitter_response)
    twitts = twitter_response['statuses']
    twitts.map! do |t|
      { 
        text: t['text'],
        posted_at: ActionController::Base.helpers.time_ago_in_words(t['created_at']),
        user: "@#{t['user']['screen_name']}"
      }
    end
  end
end
