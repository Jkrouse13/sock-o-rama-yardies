class CartsController < ApplicationController
    def index #has template renders view
     @carts = Cart.all
     #split and stuff
     render json: @carts
   end
end
