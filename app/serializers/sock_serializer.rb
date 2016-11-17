class SockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :featured, :material
  has_one :color
  has_one :style
  has_one :category
end
