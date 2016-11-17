class ChargesController < ApplicationController
    def new
    end

    def create
        # Amount in cents
        @cart=Cart.find_by(token: params[:token])
            @amount = 500
            customer = Stripe::Customer.create(
                email: params[:stripeEmail],
                source: params[:stripeToken]
                )

                charge = Stripe::Charge.create(
                customer: customer.id,
                amount: @amount,
                description: 'Rails Stripe customer',
                currency: 'usd'
                )
                @cart.complete = true
                render json: #cart, charge,
                    {success: 'Thank you for shopping at Sock-O-Rama.' }

            rescue Stripe::CardError
    end
end
