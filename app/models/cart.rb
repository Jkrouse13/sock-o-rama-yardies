class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items
end
