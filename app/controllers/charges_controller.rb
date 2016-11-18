class ChargesController < ApplicationController
    def new
    end

    def create
        # Amount in cents
        @cart=Cart.find_by(token: params[:token])
            @amount = @cart.grand_total
            @cart.update(
            street: params[:street],
            city:  params[:city],
            state:  params[:state],
            zip:  params[:zip],
            country:  params[:country],
            first_name:  params[:first_name],
            last_name:  params[:last_name],
            email:  params[:stripeEmail])
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
