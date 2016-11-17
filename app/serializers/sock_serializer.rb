class SockSerializer < ActiveModel::Serializer
  # attributes :id, :name, :price, :description, :image, :featured, :material
  # :image was breaking the response backt to the front end
  # TODO: Fix once images are working.
  attributes :id, :name, :price, :description, :featured, :material
  has_one :color
  has_one :style
  has_one :category
end
