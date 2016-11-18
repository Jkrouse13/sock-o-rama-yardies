class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart

  validates :item_quantity, numericality: { greater_than_or_equal_to: 1, only_integer: true }

  validates :size_id, presence: true #:sock_id, #:abbr

  def total
    @line_total = (size.sock.price * item_quantity)
  end
end
