class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items

  def sub_total
    line_items.collect{ |line| line.valid? ? (line.cost) : 0}.sum
  end

  def tax
    (sub_total * 1.00) * 0.06
  end
end
