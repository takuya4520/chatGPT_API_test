class ApplicationController < ActionController::Base
  require "openai"

  before_action :set_common_variable

  private

  # APIキーを設定
  def set_common_variable
    api_key = Rails.application.credentials[:openai][:api_key]
    @client = OpenAI::Client.new(access_token: api_key)
  end
end
