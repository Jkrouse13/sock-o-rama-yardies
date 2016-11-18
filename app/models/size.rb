class Size < ApplicationRecord
  belongs_to :sock
  has_many :line_items

  # validates :stock_quantitiy, numericality: { greater_than_or_equal_to: 1, only_integer: true }
  # validates :sock_id, presence: true
  #validates :abbv, inclusion: { in: %w(S M L XL),
    # {error: "%{value} is not a valid size" }

end
#>> Size.new.errors[:sock_id].any? # => false
#>> Size.create.errors[:sock_id].any? # => {:sock_id=>["can't be blank", ""]}
