class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index 
    @users = User.all 
    render json: @users 
  end 

  def show 
    # user_json = UserSerializer.new(@user).serialized_json
    # render json: @user, include: {:waters => {:only => [:amount, :user_id]}, :except => [:password, :updated_at]}
    render json: @user, include: [:waters], :except => [:password_digest, :updated_at]
  end 

  def create 
    # byebug
    @user = User.new(user_params)
    if @user.save 
      render json: @user
    else 
      render json: @user.errors
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