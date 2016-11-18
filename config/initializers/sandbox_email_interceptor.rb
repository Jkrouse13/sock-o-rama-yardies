class SandboxEmailInterceptor
  #for intercepting an email to edit before sending
  def self.delivering_email(message)
    message.to = ['sandbox@example.com']
  end
end
