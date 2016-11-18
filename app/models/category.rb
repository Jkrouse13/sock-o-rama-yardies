class Category < ApplicationRecord
  has_many :socks

  validates :name, presence: true

end
