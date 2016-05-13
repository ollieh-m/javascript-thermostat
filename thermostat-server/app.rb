require 'sinatra/base'
require './models/temperature'
require 'json'
require 'byebug'

class Thermostat < Sinatra::Base
  
  enable :sessions

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    response.headers["Access-Control-Allow-Origin"]="*"
    200
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    ruby_hash = JSON.parse(request.body.read)
    Temperature.set_temp(ruby_hash)
    #random thing here so Temperature.set_temp isn't returned fixes 'no conversion from array to string' server error!
    ruby_hash.class
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    JSON.generate(Temperature.get_temp)
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
