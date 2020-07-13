class WatersSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :amount, :created_at 
end 