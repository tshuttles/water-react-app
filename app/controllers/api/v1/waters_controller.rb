class Api::V1::WatersController < ApplicationController
  before_action :find_water, only: [:edit, :update]

  def index 
    if logged_in?
      @waters = current_user.waters 
      render json: @waters 
    else 
      render json: {error: "You must be logged in to see your water log"}
    end
  end 

  def create 
    water = Water.new(water_params)
    if water.save 
      render json: waters
    else 
      render json: {error: "Error! Could not input water amount."}
    end 
  end 

  # def edit
  # end

  # def update 
  #   water.update(water_params)
  #   render json: waters
  # end 

  def destroy
    water = Water.find(params[:id])
    water.delete
  end

  private 

  def water_params
    params.require(:water).permit(:amount)
  end 

  def find_water 
    water = Water.find_by(id: params[:id])
  end 

end