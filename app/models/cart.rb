class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items


  def sub_total
    line_items.collect{ |line| (line.cost) : 0}.sum
  end

  def tax
    (sub_total * 0.06).to_i
  end

  def shipping
    (line_items.collect{ |line| (line.item_quantity) : 0}.sum) * 200
  end

  def grand_total
    sub_total + tax + shipping
  end
end
