class UserMailer < ApplicationMailer
    # Just like controllers, any instance variables we define in the method become available for use in the views.
    # email method to set User/subject/path
    default from: 'Shopping@Sock-o-Rama.com'
    # default Hash - This is a hash of default values for any email you send from this mailer. In this case we are setting the :from header to a value for all messages in this class. This can be overridden on a per-email basis.
    def thankyou_email(user)
        @user = user
        @url = `http://Sock-o-Rama.com/login`
        mail(to: @user.email, subject: `Thank you for shopping at Sock-o-Rama`)
        # mail - The actual email message, we are passing the :to and :subject headers in
    end
end

# # app/mailers/user_mailer.rb
# class UserMailer < ApplicationMailer
# end
