class TourSessionsController < ApplicationController
  before_action :set_tour_session, only: [:show, :edit, :update, :destroy]

  # GET /tour_sessions
  # GET /tour_sessions.json
  def index
    @tour_sessions = TourSession.all
  end

  # GET /tour_sessions/1
  # GET /tour_sessions/1.json
  def show
  end

  # GET /tour_sessions/new
  def new
    @tour_session = TourSession.new
  end

  # GET /tour_sessions/1/edit
  def edit
  end

  # POST /tour_sessions
  # POST /tour_sessions.json
  def create
    @tour_session = TourSession.new(tour_session_params)

    respond_to do |format|
      if @tour_session.save
        format.html { redirect_to @tour_session, notice: 'Tour session was successfully created.' }
        format.json { render :show, status: :created, location: @tour_session }
      else
        format.html { render :new }
        format.json { render json: @tour_session.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tour_sessions/1
  # PATCH/PUT /tour_sessions/1.json
  def update
    respond_to do |format|
      if @tour_session.update(tour_session_params)
        format.html { redirect_to @tour_session, notice: 'Tour session was successfully updated.' }
        format.json { render :show, status: :ok, location: @tour_session }
      else
        format.html { render :edit }
        format.json { render json: @tour_session.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tour_sessions/1
  # DELETE /tour_sessions/1.json
  def destroy
    @tour_session.destroy
    respond_to do |format|
      format.html { redirect_to tour_sessions_url, notice: 'Tour session was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tour_session
      @tour_session = TourSession.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tour_session_params
      params.require(:tour_session).permit(:tour_date, :tour_id, :number_booked)
    end
end
