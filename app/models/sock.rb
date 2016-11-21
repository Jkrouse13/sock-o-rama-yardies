class Sock < ApplicationRecord
  belongs_to :color
  belongs_to :style
  belongs_to :category
  has_many :sizes

  validates :price, presence: true, numericality: true

  attachment :image

  default_scope { order(name: :desc) }

end
