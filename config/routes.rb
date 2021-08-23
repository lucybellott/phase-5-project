Rails.application.routes.draw do
  
  resources :comments, only: [:create, :destroy, :index]
  resources :posts, only: [:index, :create, :destroy, :show]
  resources :users, only: [:index, :create, :destroy, :show]
 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/current_user", to: "sessions#user"

#  get "/test", to: "users#anything"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
