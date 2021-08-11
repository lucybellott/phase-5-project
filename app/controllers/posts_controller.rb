class PostsController < ApplicationController
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
    post = Post.new(post_params)

    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    post = set_post
    
    if post.update(post_params)
      render json: post
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    post = set_post
    post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      post = Post.find(params[:id]) 
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:title, :category, :image, :claim, :fact, :source_link, :user_id)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def render_not_found_response
      render json: { error: "Post not found" }, status: :not_found
    end
end
