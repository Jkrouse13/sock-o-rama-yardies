class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :shipping_address, :email, :first_name, :last_name, :complete
  has_many :line_item
end
