# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# Sock.create(
#   style: Style.find_or_initialize_by(name: "crew"),
#   color: Color.find_or_initialize_by(name: "grey"),
#   name: "The Sock Monkey",
#   price: 2700
# )

# Size.create!(
# arrb: "Sm",
# stock_quantitiy: 22,
# sock: Sock.create(
#   style: Style.find_or_initialize_by(name: "crew"),
#   color: Color.find_or_initialize_by(name: "grey"),
#   name: "The Sock Monkey",
#   price: 2700
#   )
# )

LineItem.create!(
  cart: Cart.create!,
  item_quantity: 5,
  size:Size.create!(
  arrb: "Sm",
  stock_quantitiy: 22,
  sock: Sock.create(
    style: Style.find_or_initialize_by(name: "crew"),
    color: Color.find_or_initialize_by(name: "grey"),
    name: "The Sock Monkey",
    price: 2700
    )
  )
)
Sock.create(
  style: Style.find_or_initialize_by(name: "crew"),
  color: Color.find_or_initialize_by(name: "grey"),
  name: "The Sock Gorilla",
  price: 2700
)
Sock.create(
  style: Style.find_or_initialize_by(name: "crew"),
  color: Color.find_or_initialize_by(name: "grey"),
  name: "The Sock Alligator",
  price: 8800
)
Sock.create(
  style: Style.find_or_initialize_by(name: "crew"),
  color: Color.find_or_initialize_by(name: "grey"),
  name: "The Sock Giraffe",
  price: 4500
)
