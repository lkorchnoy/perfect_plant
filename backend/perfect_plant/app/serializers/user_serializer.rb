class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :email, :question #:plants
  #def plants
    #self.object.pick_the_perfect_plants.map do |pick_the_perfect_plant|
      #{question: pick_the_perfect_plant.question}
    #end
  #end
end
