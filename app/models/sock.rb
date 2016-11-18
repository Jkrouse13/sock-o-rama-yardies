class Sock < ApplicationRecord
  belongs_to :color
  belongs_to :style
  belongs_to :category
  has_many :sizes

  validates :name, presence: true
  validates :price, numericality: {only_integer: true }

  attachment :image

  default_scope { order(name: :desc) }

end
