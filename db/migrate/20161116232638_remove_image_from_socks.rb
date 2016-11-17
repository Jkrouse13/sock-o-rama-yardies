class RemoveImageFromSocks < ActiveRecord::Migration[5.0]
  def change
    remove_column :socks, :image, :string
  end
end
