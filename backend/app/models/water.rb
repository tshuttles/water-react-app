class Water < ApplicationRecord
  belongs_to :user
  validates :amount, presence: true

  def created_at
    attributes['created_at'].strftime("%m/%d/%Y %I:%M %p")
  end
end