ActionMailer::Base.smtp_settings = {
#initialize mailer configuration
  address:              'smtp.sendgrid.net',
  port:                 587,
  domain:               'heroku.com',
  user_name:            ENV['SENDGRID_USERNAME'],
  password:             ENV['SENDGRID_PASSWORD'],
  authentication:       :plain,
  enable_starttls_auto: true  }
