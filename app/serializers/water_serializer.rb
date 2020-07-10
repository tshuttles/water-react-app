class WaterSerializer 

  def initialize(water_object)
    @water = water_object 
  end 

  def to_serialized_json 
    options = {
      only: [:name],
      except: [:updated_at, :created_at]
    }
    @water.to_json(options)
  end 

end 