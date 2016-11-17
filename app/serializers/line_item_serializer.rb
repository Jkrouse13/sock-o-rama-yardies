class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :size_id, :item_quantity
  has_one :cart
end
