class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
end
