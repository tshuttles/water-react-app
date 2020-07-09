class Api::V1::SessionsController < ApplicationController 

  # def login
  #   @user = User.new 
  # end 

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id 
      render json: @user
    else 
      # flash[:error] = "Incorrect login attempt. Please try again."
      render json: (
        error: "Invalid credentials"
      )
    end 
  end 

  # def destroy 
  #   session.delete :user_id 
  #   redirect_to root_path
  # end 

  # add omniauth later??

end 