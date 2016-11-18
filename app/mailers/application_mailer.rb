class ApplicationMailer < ActionMailer::Base
  #determines the behavior for child user_mailer.
  default from: 'Shopping@Sock-o-Rama.com'
  layout 'mailer'
end
