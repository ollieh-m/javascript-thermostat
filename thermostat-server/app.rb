require 'sinatra/base'
require './models/temperature'
require 'json'

class Thermostat < Sinatra::Base
  
  enable :sessions

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    200
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    headers['Access-Control-Allow-Methods'] = "POST"
    ruby_hash = JSON.parse(request.body.read)
    Temperature.set_temp(ruby_hash)
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    Temperature.get_temp.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
