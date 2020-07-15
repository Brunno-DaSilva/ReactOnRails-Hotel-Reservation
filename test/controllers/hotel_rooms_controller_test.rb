require 'test_helper'

class HotelRoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hotel_room = hotel_rooms(:one)
  end

  test "should get index" do
    get hotel_rooms_url, as: :json
    assert_response :success
  end

  test "should create hotel_room" do
    assert_difference('HotelRoom.count') do
      post hotel_rooms_url, params: { hotel_room: { breakfast: @hotel_room.breakfast, capacity: @hotel_room.capacity, description: @hotel_room.description, featured: @hotel_room.featured, name: @hotel_room.name, pets: @hotel_room.pets, price: @hotel_room.price, roomType: @hotel_room.roomType, size: @hotel_room.size, slug: @hotel_room.slug } }, as: :json
    end

    assert_response 201
  end

  test "should show hotel_room" do
    get hotel_room_url(@hotel_room), as: :json
    assert_response :success
  end

  test "should update hotel_room" do
    patch hotel_room_url(@hotel_room), params: { hotel_room: { breakfast: @hotel_room.breakfast, capacity: @hotel_room.capacity, description: @hotel_room.description, featured: @hotel_room.featured, name: @hotel_room.name, pets: @hotel_room.pets, price: @hotel_room.price, roomType: @hotel_room.roomType, size: @hotel_room.size, slug: @hotel_room.slug } }, as: :json
    assert_response 200
  end

  test "should destroy hotel_room" do
    assert_difference('HotelRoom.count', -1) do
      delete hotel_room_url(@hotel_room), as: :json
    end

    assert_response 204
  end
end
