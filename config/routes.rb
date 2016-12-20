Rails.application.routes.draw do

  root 'pages#home'
  get '/home' => 'pages#home'

  resources :tour_sessions
  resources :tours
  resources :breweries
  resources :bookings

  get "/app" => 'pages#app'

end
