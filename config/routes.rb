
Rails.application.routes.draw do
  resources :carts
  resources :socks
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    get   'welcome/index'
    get   '/sockdetail' => 'welcome#sockDetail'
    get   '/mockcart' => 'welcome#cart'

    # routes for carts and line_items
    get   '/sock_detail/[:id]' => 'socks#show'
    post   '/add_cart_item' => 'line_item#create'
    get  '/cart' => 'carts#show'
    get   '/update_cart_item' => 'line_items#update'
    #static routes for React
    get 'static/index'
    root 'static#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'
end
