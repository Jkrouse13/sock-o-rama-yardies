class LineItemController < ApplicationController
  # def index #has template renders view
  # end

  # def show #has template, renders view
  # end

  # def new #has template, displays form
  # end

  def create #saves and redirects, saves new record
    @line_item = LineItem.new(
    cart: Cart.where.(token: params[:token]).first_or_initialize,
    size_id:    params[:size_id],
    quantitiy:  params[:quantitiy],
    sock_id:    params[:sock_id]
    )
    { success: 'Item was successfully added to cart.' }
    @line_item.save
    # redirects?
  end

  # def edit #has template, diplays form of exsisting record
  # end

  # def update #saves and redirects, saves changes
  # end

  def destroy  #destorys and redirects
    @line_item = LineItem.find(params[:id])
    @line_item.destroy!
    render json: {success: 'Item was removed.' }
  end

end
