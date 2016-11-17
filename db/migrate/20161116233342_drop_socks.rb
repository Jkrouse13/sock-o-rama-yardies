class DropSocks < ActiveRecord::Migration[5.0]
  def change
    remove_column :socks, :image_id, :string
    add_column :socks, :image_id, :string
  end
end
