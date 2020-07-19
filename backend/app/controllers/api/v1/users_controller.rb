class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index 
    @users = User.all 
    render json: @users 
  end 

  def show 
    render json: @user, include: [:waters], :except => [:password_digest, :updated_at]
  end 

  def create
    @user = User.new(user_params)
    if @user.save 
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user)
    else 
      # render json: @user.errors
      payload = {
        error: "Invalid entry"
      }
      render :json => payload
    end 
  end 

  private 

  def set_user
    @user = User.find_by(params[:id])
  end 

  def user_params 
    params.require(:user).permit(:username, :password)
  end 

end