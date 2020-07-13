Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/api/v1/login", to: "api/v1/sessions#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  get "api_v1_user_waters_path", to: "api/v1/waters#index"
  post "api_v1_user_waters_path", to: "api/v1/waters#create"

  namespace :api do
    namespace :v1 do 
      resources :users do 
        resources :waters, only: [:index, :create]
      end 
    end 
  end 
end