class RemoveMaterialFromCategories < ActiveRecord::Migration[5.0]
  def change
    remove_column :categories, :material, :string
    add_column :socks, :material, :string
  end
end
