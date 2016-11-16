class CartsController < ApplicationController
  # def index #has template renders view
  # end

  def show #has template, renders view
    @cart= cart.find_by(params[:token])
    @cart.line_items
    render json: @cart
  end

  # def new #has template, displays form
  # end
  #
  # def create #saves and redirects, saves new record
  # end
  #
  # def edit #has template, diplays form of exsisting record
  # end
  #
  # def update #saves and redirects, saves changes
  # end
  #
  # def destroy  #destorys and redirects
  # end

end
