class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :street, :email, :first_name, :last_name, :complete, :city, :state, :zip, :country, :sub_total, :tax, :shipping, :grand_total, :line_items
  has_many :line_items
  
end
