class UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :username
  # has_many :waters 
  # has_many :waters, serializer: WatersSerializer
end 