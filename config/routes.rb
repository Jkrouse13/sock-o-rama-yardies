Rails.application.routes.draw do
  resources :carts
  resources :socks
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    get 'welcome/index'
    get '/sockdetail' => 'welcome#sockDetail'
    get '/mockcart' => 'welcome#cart'

    #static routes for React
    get 'static/index'
    root 'static#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
