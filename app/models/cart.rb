class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items


  @@tax = 6
  @@shipping = 200

  def subtotal
      line_items.inject(0) { |sum, x| sum + x.total }
      # @line_items.sum(&:line_total) to avoid the loney operator
  end

  def tax
      subtotal * (@@tax/100)
  end

  def shipping
      line_items.count * @@shipping
  end

  def total
      sum(cart.subtotal, cart.shipping, cart.tax).to_i
  end

end
