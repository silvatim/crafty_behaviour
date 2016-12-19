require 'test_helper'

class TourSessionsControllerTest < ActionController::TestCase
  setup do
    @tour_session = tour_sessions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tour_sessions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tour_session" do
    assert_difference('TourSession.count') do
      post :create, tour_session: { number_booked: @tour_session.number_booked, tour_date: @tour_session.tour_date, tour_id: @tour_session.tour_id }
    end

    assert_redirected_to tour_session_path(assigns(:tour_session))
  end

  test "should show tour_session" do
    get :show, id: @tour_session
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tour_session
    assert_response :success
  end

  test "should update tour_session" do
    patch :update, id: @tour_session, tour_session: { number_booked: @tour_session.number_booked, tour_date: @tour_session.tour_date, tour_id: @tour_session.tour_id }
    assert_redirected_to tour_session_path(assigns(:tour_session))
  end

  test "should destroy tour_session" do
    assert_difference('TourSession.count', -1) do
      delete :destroy, id: @tour_session
    end

    assert_redirected_to tour_sessions_path
  end
end
