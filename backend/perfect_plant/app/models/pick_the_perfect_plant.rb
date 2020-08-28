class PickThePerfectPlant < ApplicationRecord
    belongs_to :user
     
    validates :question, presence: true
    
end
