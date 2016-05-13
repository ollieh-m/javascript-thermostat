require 'sinatra/base'
require './models/temperature'
require 'json'

class Thermostat < Sinatra::Base
  
  enable :sessions

  before do
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Headers'] = 'origin, content-type, accept'
    headers['Access-Control-Allow-Credentials'] = 'true'

    if request.request_method == 'OPTIONS'
      headers["Access-Control-Allow-Methods"] = "POST, GET"
      halt 200
    end
  end

  post '/temperature' do
    ruby_hash = JSON.parse(request.body.read)
    Temperature.set_temp(ruby_hash)
  end

  get '/temperature' do
    content_type :json
    Temperature.get_temp.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
