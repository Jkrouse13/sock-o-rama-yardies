class CreateSocks < ActiveRecord::Migration[5.0]
  def change
    create_table :socks do |t|
      t.string :name
      t.references :color, foreign_key: true
      t.references :style, foreign_key: true
      t.integer :price
      t.references :category, foreign_key: true
      t.string :description
      t.string :image
      t.boolean :featured

      t.timestamps
    end
  end
end
