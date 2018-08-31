# frozen_string_literal: true

class V1::TwittsController < ApplicationController
  def new
  end

  def index
    # @twitts = TwitterClient.new.get_twitts('Manchester United')
    @twitts = params
  end
end
