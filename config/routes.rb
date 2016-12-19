Rails.application.routes.draw do
  get 'pages/index'

  resources :tour_sessions
  resources :tours
  resources :breweries
  resources :bookings
  
end
