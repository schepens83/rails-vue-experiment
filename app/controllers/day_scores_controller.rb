class DayScoresController < ApplicationController
  def index
    @day_score = DayScore.all
    respond_to do |format|
      format.html
      format.json { render json: @day_score }
    end
  end

  def create
    @day_score = DayScore.new(day_score_params)
    respond_to do |f|
      f.json do
        if @day_score.save
          render json: @day_score
        else
          render json: { errors: @day_score.errors.messages }, status: 422
        end
      end
    end
  end

  def update
    @day_score = DayScore.find(params[:id])
    respond_to do |format|
      format.json do
        if @day_score.update(day_score_params)
          render json: @day_score
        else
          render json: { errors: @day_score.errors.messages }, status: 422
        end
      end
    end
  end

  def destroy
    @day_score = DayScore.find(params[:id])
    @day_score.destroy
    respond_to do |frmt|
      frmt.json { render json: {}, status: :no_content }
    end
  end



  private

  def day_score_params
    params.require(:day_score).permit(:day, :tension, :sleep)

  end
end
