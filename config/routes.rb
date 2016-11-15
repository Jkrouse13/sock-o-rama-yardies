Rails.application.routes.draw do
  resources :socks
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    get 'welcome/index'
    get '/sockdetail' => 'welcome#sockDetail'
    get '/cart' => 'welcome#cart'
    get '/checkout' => 'welcome#checkout'
     root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
