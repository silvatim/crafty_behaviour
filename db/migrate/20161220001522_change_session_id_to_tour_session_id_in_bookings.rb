class ChangeSessionIdToTourSessionIdInBookings < ActiveRecord::Migration
  def change
    rename_column :bookings, :session_id, :tour_session_id
  end
end
