class Api::V1::WatersController < ApplicationController
  # before_action :find_water, only: [:edit, :update]

  def index 
    if logged_in?
      @waters = current_user.waters 
      render json: @waters 
    else 
      render json: {error: "You must be logged in to see your water log"}
    end
  end 

  def create 
    @water = current_user.waters.build(water_params)
    if @water.save
      @water.date = @water.created_at.strftime("%j")
      @water.save
      render json: @water
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

  # def date 
  #   self.created_at.strftime("%j")
  #   self.save
  # end 

end