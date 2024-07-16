Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :vi do
      resources :airlines, param: :slug
      resources :reviews, only %i[create destroy]
    end
  end

  get '*path', to: 'homepage#index', via: :all
end
