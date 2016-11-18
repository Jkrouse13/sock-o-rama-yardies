class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  def new
  end

  def cost
    (self.item_quantity * self.size.sock.price)
  end
end
