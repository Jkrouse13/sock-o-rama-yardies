class ChargesController < ApplicationController
    def new
    end

    def create
        # Amount in cents
        @cart=Cart.find_by(token: params[:token])
            @amount = @cart.grand_total
            @cart.update(
            street: params[:shippingstreet],
            city:  params[:shippingcity],
            state:  params[:shippingstate],
            zip:  params[:shippingzip],
            country:  params[:shippingcountry],
            first_name:  params[:firstname],
            last_name:  params[:lastname],
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
                UserMailer.thankyou_email(@user).deliver_now
                render json: #cart, charge,
                    {success: 'Thank you for shopping at Sock-O-Rama.' }

            rescue Stripe::CardError
    end
end
