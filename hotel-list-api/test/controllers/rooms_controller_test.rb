require 'test_helper'

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url, as: :json
    assert_response :success
  end

  test "should create room" do
    assert_difference('Room.count') do
      post rooms_url, params: { room: { breakfast: @room.breakfast, capacity: @room.capacity, description: @room.description, extras: @room.extras, featured: @room.featured, imageDetails: @room.imageDetails, name: @room.name, pets: @room.pets, price: @room.price, roomImage: @room.roomImage, size: @room.size, slug: @room.slug, type: @room.type } }, as: :json
    end

    assert_response 201
  end

  test "should show room" do
    get room_url(@room), as: :json
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { breakfast: @room.breakfast, capacity: @room.capacity, description: @room.description, extras: @room.extras, featured: @room.featured, imageDetails: @room.imageDetails, name: @room.name, pets: @room.pets, price: @room.price, roomImage: @room.roomImage, size: @room.size, slug: @room.slug, type: @room.type } }, as: :json
    assert_response 200
  end

  test "should destroy room" do
    assert_difference('Room.count', -1) do
      delete room_url(@room), as: :json
    end

    assert_response 204
  end
end
