class SockSerializer < ActiveModel::Serializer
  # attributes :id, :name, :price, :description, :image, :featured, :material
  # :image was breaking the response backt to the front end
  # TODO: Fix once images are working.
  attributes :id, :name, :price, :description, :featured, :material, :image, :color, :style, :category
  has_one :color
  has_one :style
  has_one :category
  has_many :sizes

  def image
   Refile.attachment_url(object, :image, :fit, 300, 300, format: "jpg")
  end
end
