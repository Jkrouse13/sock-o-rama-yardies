class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  def new
  end

end
