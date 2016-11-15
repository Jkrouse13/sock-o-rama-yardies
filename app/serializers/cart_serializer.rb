class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :shipping_address, :email, :first_name, :last_name, :complete
  has_one :line_item
end
