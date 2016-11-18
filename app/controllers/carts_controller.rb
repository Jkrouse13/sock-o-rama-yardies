class CartsController < ApplicationController
  # def index #has template renders view
  # end

  def show #has template, renders view
    @cart= Cart.find_by(token: params[:token])
    # Cart total

    render json: @cart.line_items, include: "size.sock"

  end

  def update #saves and redirects, saves changes
  end

  def destroy  #destorys and redirects
    @cart=Cart.find_by(token: params[:token])
    @cart.line_items.destroy!
    render json:  {success: 'Cart was successfully emptied.' }
  end

end
