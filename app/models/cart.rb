class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items

  def sub_total
    line_items.collect{ |line| line.valid? ? (line.cost) : 0}.sum
  end

  def tax
    (sub_total * 1.00) * 0.06
  end

  def shipping
    (line_items.collect{ |line| line.valid? ? (line.item_quantity) : 0}.sum) * 200
  end

  def grand_total
    sub_total + tax + shipping
  end
end
