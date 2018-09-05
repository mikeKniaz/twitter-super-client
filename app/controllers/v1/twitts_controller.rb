# frozen_string_literal: true

class V1::TwittsController < ApplicationController
  def new
  end

  def index
    @twitts = TwitterClient.new.get_twitts(params[:key_words] || 'Manchester United')
  end
end
