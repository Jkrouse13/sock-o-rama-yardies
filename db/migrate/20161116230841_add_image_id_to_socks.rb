class AddImageIdToSocks < ActiveRecord::Migration[5.0]
  def change
    add_column :socks, :image_id, :string
  end
end
