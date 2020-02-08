require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @image = images(:one)
  end

  test "should get index" do
    get images_url, as: :json
    assert_response :success
  end

  test "should create image" do
    assert_difference('Image.count') do
      post images_url, params: { image: { roomDetails1: @image.roomDetails1, roomDetails2: @image.roomDetails2, roomDetails3: @image.roomDetails3, roomDetails4: @image.roomDetails4, roomImage: @image.roomImage } }, as: :json
    end

    assert_response 201
  end

  test "should show image" do
    get image_url(@image), as: :json
    assert_response :success
  end

  test "should update image" do
    patch image_url(@image), params: { image: { roomDetails1: @image.roomDetails1, roomDetails2: @image.roomDetails2, roomDetails3: @image.roomDetails3, roomDetails4: @image.roomDetails4, roomImage: @image.roomImage } }, as: :json
    assert_response 200
  end

  test "should destroy image" do
    assert_difference('Image.count', -1) do
      delete image_url(@image), as: :json
    end

    assert_response 204
  end
end
