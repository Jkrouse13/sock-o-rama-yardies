class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :street, :email, :first_name, :last_name, :complete, :city, :state, :zip, :country
  has_many :line_items
end
