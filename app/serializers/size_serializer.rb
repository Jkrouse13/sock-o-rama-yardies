class SizeSerializer < ActiveModel::Serializer
  attributes :id, :arrb
  has_one :sock
end
