require 'test_helper'

class ExtrasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @extra = extras(:one)
  end

  test "should get index" do
    get extras_url, as: :json
    assert_response :success
  end

  test "should create extra" do
    assert_difference('Extra.count') do
      post extras_url, params: { extra: { extras1: @extra.extras1, extras2: @extra.extras2, extras3: @extra.extras3, extras4: @extra.extras4, extras5: @extra.extras5, extras6: @extra.extras6 } }, as: :json
    end

    assert_response 201
  end

  test "should show extra" do
    get extra_url(@extra), as: :json
    assert_response :success
  end

  test "should update extra" do
    patch extra_url(@extra), params: { extra: { extras1: @extra.extras1, extras2: @extra.extras2, extras3: @extra.extras3, extras4: @extra.extras4, extras5: @extra.extras5, extras6: @extra.extras6 } }, as: :json
    assert_response 200
  end

  test "should destroy extra" do
    assert_difference('Extra.count', -1) do
      delete extra_url(@extra), as: :json
    end

    assert_response 204
  end
end
