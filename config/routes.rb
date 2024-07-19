Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug do
        resources :reviews, only: [:create, :destroy]
      end
    end
  end

  get '*path', to: 'homepage#index', via: :all
end
