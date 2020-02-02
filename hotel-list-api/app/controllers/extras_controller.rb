class ExtrasController < ApplicationController
  before_action :set_extra, only: [:show, :update, :destroy]

  # GET /extras
  def index
    @extras = Extra.all

    render json: @extras
  end

  # GET /extras/1
  def show
    render json: @extra
  end

  # POST /extras
  def create
    @extra = Extra.new(extra_params)

    if @extra.save
      render json: @extra, status: :created, location: @extra
    else
      render json: @extra.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /extras/1
  def update
    if @extra.update(extra_params)
      render json: @extra
    else
      render json: @extra.errors, status: :unprocessable_entity
    end
  end

  # DELETE /extras/1
  def destroy
    @extra.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_extra
      @extra = Extra.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def extra_params
      params.require(:extra).permit(:extras1, :extras2, :extras3, :extras4, :extras5, :extras6)
    end
end
