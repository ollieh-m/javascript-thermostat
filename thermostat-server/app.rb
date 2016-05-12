require 'sinatra/base'
require './models/temperature'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    'hello'
  end

  post '/temperature' do
    response['Access-Control-Allow-Origin'] = '*'
    request.body.rewind
    temperature = JSON.parse(request.body.read)
    Temperature.set_temp(temperature)
  end

  get '/temperature' do
    response['Access-Control-Allow-Origin'] = '*'
    Temperature.get_temp.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
