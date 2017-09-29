require 'test_helper'

class DayScoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @day_score = day_scores(:one)
  end

  test "should get index" do
    get day_scores_url
    assert_response :success
  end

  test "should get new" do
    get new_day_score_url
    assert_response :success
  end

  test "should create day_score" do
    assert_difference('DayScore.count') do
      post day_scores_url, params: { day_score: { day: @day_score.day, sleep: @day_score.sleep, tension: @day_score.tension } }
    end

    assert_redirected_to day_score_url(DayScore.last)
  end

  test "should show day_score" do
    get day_score_url(@day_score)
    assert_response :success
  end

  test "should get edit" do
    get edit_day_score_url(@day_score)
    assert_response :success
  end

  test "should update day_score" do
    patch day_score_url(@day_score), params: { day_score: { day: @day_score.day, sleep: @day_score.sleep, tension: @day_score.tension } }
    assert_redirected_to day_score_url(@day_score)
  end

  test "should destroy day_score" do
    assert_difference('DayScore.count', -1) do
      delete day_score_url(@day_score)
    end

    assert_redirected_to day_scores_url
  end
end
