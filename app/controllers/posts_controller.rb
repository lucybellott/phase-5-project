class PostsController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /posts
  def index
    posts = Post.all
    render json: posts 
  end

  # GET /posts/1
  def show
    post = set_post
    render json: post
  end

  # POST /posts
  def create
    post = Post.create!(post_params)
   
    render json: post, status: :created
    
    end


 # DELETE /posts/1
  def destroy
    post = set_post
    post.destroy
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      post = Post.find(params[:id]) 
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :category, :image, :claim, :fact, :source_link, :user_id)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def render_not_found_response
      render json: { error: "Post not found" }, status: :not_found
    end
   
end
