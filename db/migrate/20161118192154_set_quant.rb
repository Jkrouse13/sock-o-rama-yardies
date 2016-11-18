class SetQuant < ActiveRecord::Migration[5.0]
  def change
    change_column :line_items, :item_quantity, :integer, :default => 0
  end
end
