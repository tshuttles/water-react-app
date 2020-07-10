class Api::V1::SessionsController < ApplicationController 

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id 
      render json: @user
    else 
      render json: {
        error: "Invalid credentials"
      }
    end 
  end 

  def get_current_user 
    if logged_in?
      render json: get_current_user
    else 
      render json: {error: "No one logged in"}
    end 
  end 

  # def destroy 
  #   session.delete :user_id 
  #   redirect_to root_path
  # end 

  # add omniauth later??

end 