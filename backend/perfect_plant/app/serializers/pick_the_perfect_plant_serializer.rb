class PickThePerfectPlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question_number, :question, :user #:owner 
  #def owner 
    #{owner_id: self.object.user.id,
    #owner_name: self.object.user.name}
    #end  
end
