class WelcomeController < ApplicationController
    def index
        render json: { status: 200, message: "Noticeboard API" }
      end
end
