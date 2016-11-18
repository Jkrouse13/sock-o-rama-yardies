class SocksController < ApplicationController

  def index #has template renders view
    @socks = Sock.all
    render json: @socks
  end

  def show #has template, renders view
    @sock = Sock.find(params[:id])
    render json: @sock
  end

end
