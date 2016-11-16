class AddAbbrToSizes < ActiveRecord::Migration[5.0]
  def change
    add_column :sizes, :arrb, :string
  end
end
