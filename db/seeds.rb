# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "google_drive"
session = GoogleDrive::Session.from_config("config.json")
# session = GoogleDrive::Session.from_service_account_key(StringIO.new(ENV['google_secret']))
# Sock.create(
#   style: Style.find_or_initialize_by(name: "crew"),
#   color: Color.find_or_initialize_by(name: "grey"),
#   name: "The Sock Monkey",
#   price: 2700
# )
ws = session.spreadsheet_by_key("1m_x4ZtQzTHYldutf_i90uXSfKfEjFXSPvyV_L58nDJ0").worksheets[0]


(1..ws.num_rows).each do |row|
  (1..ws.num_cols).each do |col|
    p ws[row, col]
  end
end
