require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do

  end

  post '/temperature/:temperature' do
    session[:temperature] = params[:temperature]
  end

  get '/temperature' do
    (session[:temperature] || 20).to_s
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
