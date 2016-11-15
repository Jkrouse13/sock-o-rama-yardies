class SocksController < ApplicationController
  def index #has template renders view
    @socks = Sock.all
    #split and stuff
    render json: @socks
  end

  def show #has template, renders view
    @sock = Sock.find(params :id)
    render json: @sock
  end

  # def new #has template, displays form
  # end
  #
  # def create #saves and redirects, saves new record
  # end
  #
  # def edit #has template, diplays form of exsisting record
  # end
  #
  # def update #saves and redirects, saves changes
  # end
  #
  # def destroy  #destorys and redirects
  # end

end
