class DayScoresController < ApplicationController
  def index
    @day_score = DayScore.all
    respond_to do |format|
      format.html
      format.json { render json: @day_score }
    end
  end
end
