class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :item_quantity, :cost, :sock
  has_one :cart
  has_one :size
  has_one :sock

end
