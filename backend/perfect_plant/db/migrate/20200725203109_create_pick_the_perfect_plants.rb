class CreatePickThePerfectPlants < ActiveRecord::Migration[6.0]
  def change
    create_table :pick_the_perfect_plants do |t|
      t.integer :question_number
      t.string :question
      t.belongs_to :user 
      t.timestamps
    end
  end
end
