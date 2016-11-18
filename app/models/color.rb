class Color < ApplicationRecord
  has_many :socks

  validates :name, presence: true

end
