class RemoveTypeFromStyles < ActiveRecord::Migration[5.0]
  def change
    remove_column :styles, :type, :string
    add_column :styles, :name, :string
  end
end
