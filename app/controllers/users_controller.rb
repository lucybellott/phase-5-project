class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /users
  def index
    users = User.all
    render json: users 
  end

  # GET /users/1
  def show
    user = set_user
    render json: user
  end

  # POST /users
  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    user = set_user
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    user = set_user
    user.destroy
  end

  private
    
    def set_user
      user = User.find(params[:id])
    end

   def user_params 
      params.permit(:name, :username, :password_digest, :image, :level)
    end
    
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
end
