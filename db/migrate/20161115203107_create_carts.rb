class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :token
      t.references :line_item, foreign_key: true
      t.string :shipping_address
      t.string :email
      t.string :first_name
      t.string :last_name
      t.boolean :complete

      t.timestamps
    end
  end
end
