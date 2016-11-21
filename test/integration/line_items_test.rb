require 'test_helper'

class LineItemsTest < ActionDispatch::IntegrationTest

  def test_line_items_create_with_anonymous_cart
    sock = Sock.create!(
      category: Category.new(name: "Hey"),
      color: Color.new(name: "Grey"),
      style: Style.new(name: "Dress"),
      price: 1200
    )
    size = sock.sizes.create!(stock_quantity: 15)

    assert_equal Sock, size.sock.class

    post add_cart_item_path,
      params: {
        token: '',
        size_id: size.id,
        item_quantity: 2
      }
    assert_equal 200, status
    # puts response.body.class.to_s
    data = JSON.parse(response.body)
    # puts data.class.to_s
    assert_equal data['line_item']['item_quantity'], 2
    assert_equal data['line_item']['sock']['id'], sock.id
  end

  def test_line_items_create_with_existing_cart
    sock = Sock.create!(
      category: Category.new(name: "Hey"),
      color: Color.new(name: "Grey"),
      style: Style.new(name: "Dress"),
      price: 1200
    )
    size = sock.sizes.create!(stock_quantity: 15)

    cart = Cart.create!

    post add_cart_item_path,
      params: {
        token: cart.token,
        size_id: size.id,
        item_quantity: 2
      }
    assert_equal 200, status
    # puts response.body.class.to_s
    data = JSON.parse(response.body)
    # puts data.class.to_s
    assert_equal data['line_item']['item_quantity'], 2
    assert_equal data['line_item']['sock']['id'], sock.id
    assert_equal data['line_item']['cart']['token'], cart.token
  end

end
