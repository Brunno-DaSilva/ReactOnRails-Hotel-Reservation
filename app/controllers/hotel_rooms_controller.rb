class HotelRoomsController < ApplicationController
  before_action :set_hotel_room, only: [:show, :update, :destroy]

  # GET /hotel_rooms
  def index
    @hotel_rooms = HotelRoom.all

    render json: @hotel_rooms
  end

  # GET /hotel_rooms/1
  def show
    render json: @hotel_room
  end

  # POST /hotel_rooms
  def create
    @hotel_room = HotelRoom.new(hotel_room_params)

    if @hotel_room.save
      render json: @hotel_room, status: :created, location: @hotel_room
    else
      render json: @hotel_room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hotel_rooms/1
  def update
    if @hotel_room.update(hotel_room_params)
      render json: @hotel_room
    else
      render json: @hotel_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hotel_rooms/1
  def destroy
    @hotel_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hotel_room
      @hotel_room = HotelRoom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hotel_room_params
      params.require(:hotel_room).permit(:name, :slug, :roomType, :price, :size, :capacity, :pets, :breakfast, :featured, :description)
    end
end
