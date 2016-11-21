class LineItemController < ApplicationController

  before_action :find_cart, only: [:create]

  # def index #has template renders view
  # end

  # def show #has template, renders view
  # end

  # def new #has template, displays form
  # end

  def create
      @line_item = @cart.line_items.new(
        size_id:    params[:size_id],
        item_quantity:  params[:item_quantity]
      )
      @line_item.save
      render json: @line_item
  end

  # def edit #has template, diplays form of exsisting record
  # end

  def update #saves and redirects, saves changes
    @line_item = LineItem.find(params[:id])
    @line_item.quantity = params[:quantity]
    @line_item.size_id = params[:size_id]
    @line_item.save
    render json: @line_item
  end

  def destroy  #destorys and redirects
    @line_item = LineItem.find(params[:id])
    @line_item.destroy!
    render json: {success: 'Item was removed.' }
  end

  private

  def find_cart
    if params[:token]
      @cart = Cart.where(token: params[:token]).first_or_initialize
    else
      @cart = Cart.new
    end
  end

end
