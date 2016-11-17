class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :item_quantity
  has_one :cart
  has_one :size
end
