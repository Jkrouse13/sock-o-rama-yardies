class Size < ApplicationRecord
  belongs_to :sock
  has_many :line_items
end
