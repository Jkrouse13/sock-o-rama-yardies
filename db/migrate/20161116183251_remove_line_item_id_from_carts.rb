class RemoveLineItemIdFromCarts < ActiveRecord::Migration[5.0]
  def change
    remove_column :carts, :line_item_id, :integer
  end
end
