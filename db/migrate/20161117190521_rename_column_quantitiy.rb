class RenameColumnQuantitiy < ActiveRecord::Migration[5.0]
    def change
        rename_column :sizes, :stock_quantitiy, :stock_quantity
    end
end
