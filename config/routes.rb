Rails.application.routes.draw do
  root 'welcome#index'
  resources :user_reservations
  resources :hotel_rooms
  resources :extras
  resources :images
  resources :rooms
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
