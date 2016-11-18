class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  has_one :sock, through: :size
  # validates :item_quantity, numericality: { greater_than_or_equal_to: 1, only_integer: true } #thanks Brent!
  before_save :change_stock

  def change_stock
    @size = size
    if item_quantity_changed?
      @dif = (item_quantity_change[0] - item_quantity_change[1])
      @size.stock_quantity = (size.stock_quantity + @dif)
      @size.save
    else
      @size.stock_quantity = (size.stock_quantity - item_quantity)
      @size.save
    end
  end

  # def update_stock
  #   if item_quantity_was < item_quantity
  #     @size = size
  #
  # end

  # validates :item_quantity_cant_be_more
  def new
  end

  # def item_quantity_cant_be_more
  #   if self.item_quantity > self.size.stock_quantity
  #     errors.add(:item_quantity, 'Sorry we do not have the stock to meet that order')
  #   end
  # end

  def cost
    (self.item_quantity * self.size.sock.price)
  end
end
