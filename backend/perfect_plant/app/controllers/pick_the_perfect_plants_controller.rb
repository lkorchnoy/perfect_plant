class PickThePerfectPlantsController < ApplicationController
  before_action :set_pick_the_perfect_plant, only: [:show, :update, :destroy]

  # GET /pick_the_perfect_plants
  def index
    @pick_the_perfect_plants = PickThePerfectPlant.all
    render json: @pick_the_perfect_plants.to_json(:include => {:user => {:only => [:name]}}, :except => [:created_at, :updated_at])
    #serialized_data = PickThePerfectPlantSerializer.new(@pick_the_perfect_plants).serialized_json 
    #render json: serialized_data
  end

  # GET /pick_the_perfect_plants/1
  def show
    render json: @pick_the_perfect_plant
  end

  # POST /pick_the_perfect_plants
  def create
    
    @pick_the_perfect_plant = PickThePerfectPlant.new(question_number: params[:question_number], question: params[:question], user_id: params[:user_id])

    if @pick_the_perfect_plant.save
      #serialized_data = PickThePerfectPlant.new(@pick_the_perfect_plant).serialized_json
      #render json: serialized_data
      render json: @pick_the_perfect_plant.to_json(:include => {:user => {:only => [:name]}}, :except => [:created_at, :updated_at])
    else
      render json: ("Try again. Select your favorite answer.").to_json 
    end
  end

  # PATCH/PUT /pick_the_perfect_plants/1
  def update
    if @pick_the_perfect_plant.update(pick_the_perfect_plant_params)
      render json: @pick_the_perfect_plant
    else
      render json: @pick_the_perfect_plant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pick_the_perfect_plants/1
  def destroy
    
    @pick_the_perfect_plant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pick_the_perfect_plant
      @pick_the_perfect_plant = PickThePerfectPlant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    #def pick_the_perfect_plant_params
     # params.require(:pick_the_perfect_plant).permit(:question_number, :question, :user_id)
    #end
end
