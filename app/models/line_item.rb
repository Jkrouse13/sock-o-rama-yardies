class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  validates :item_quantity, numericality: { greater_than_or_equal_to: 1, only_integer: true } #thanks Brent!
  def new
  end

  def cost
    (self.item_quantity * self.size.sock.price)
  end
end
