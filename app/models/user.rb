class User < ApplicationRecord
  has_many :waters 
  has_secure_password

  validates :username, uniqueness: true
  validates :username, presence: true
  validates :password, presence: true 
  validates :name, uniqueness: true
  validates :name, presence: true
end