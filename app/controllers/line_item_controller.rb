class LineItemController < ApplicationController
  # def index #has template renders view
  # end

  # def show #has template, renders view
  # end

  # def new #has template, displays form
  # end

  def create
    @line_item = LineItem.new(
    cart: Cart.where.(token: params[:token]).first_or_initialize,
    size_id:    params[:size_id],
    quantity:  params[:quantity],
    sock_id:    params[:sock_id]
    )
    { success: 'Item was successfully added to cart.' }
    @line_item.save
    render json: @line_item
  end

  def edit #has template, diplays form of exsisting record
    @line_item = LineItem.find(params[:id])
    @line_item.quanitity = params[:quantitiy]
    @line_item.size_id = params[:size_id]
    @line_item.save
    render json: @line_item
  end

  # def update #saves and redirects, saves changes
  # end

  def destroy  #destorys and redirects
    @line_item = LineItem.find(params[:id])
    @line_item.destroy!
    render json: {success: 'Item was removed.' }
  end

end
