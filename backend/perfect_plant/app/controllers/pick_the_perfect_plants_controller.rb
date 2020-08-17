class PickThePerfectPlantsController < ApplicationController
  before_action :set_pick_the_perfect_plant, only: [:show, :update, :destroy]

  # GET /pick_the_perfect_plants
  def index
    @pick_the_perfect_plants = PickThePerfectPlant.all
    serialized_data = PickThePerfectPlantSerializer.new(@pick_the_perfect_plants).serialized_json 
    render json: serialized_data
  end

  # GET /pick_the_perfect_plants/1
  def show
    render json: @pick_the_perfect_plant
  end

  # POST /pick_the_perfect_plants
  def create
    @pick_the_perfect_plant = PickThePerfectPlant.new(pick_the_perfect_plant_params)

    if @pick_the_perfect_plant.save
      serialized_data = PickThePerfectPlant.new(@pick_the_perfect_plant).serialized_json
      render json: serialized_data
      #render json: @pick_the_perfect_plant, status: :created, location: @pick_the_perfect_plant
    else
      render json: @pick_the_perfect_plant.errors, status: :unprocessable_entity
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
    def pick_the_perfect_plant_params
      params.require(:pick_the_perfect_plant).permit(:question_number, :question, :user_id)
    end
end
