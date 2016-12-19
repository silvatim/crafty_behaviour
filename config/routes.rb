Rails.application.routes.draw do
  get 'pages/home'

  resources :tour_sessions
  resources :tours
  resources :breweries
  resources :bookings

end
