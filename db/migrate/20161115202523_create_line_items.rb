class CreateLineItems < ActiveRecord::Migration[5.0]
  def change
    create_table :line_items do |t|
      t.references :size, foreign_key: true
      t.integer :item_quantity

      t.timestamps
    end
  end
end
