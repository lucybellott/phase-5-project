class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /comments
  def index
    comments = Comment.all
    render json: comments
  end

  # GET /comments/1
  def show
    comment = set_comment
    render json: comment 
  end

  # POST /comments
  def create
    comment = Comment.new(comment_params)
    render json: comment, status: :created
  end

  # PATCH/PUT /comments/1
  def update
    comment = set_comment
    render json: comment
    
  end

  # DELETE /comments/1
  def destroy
    comment = set_comment
    comment.destroy
  end

  private
    
    def set_comment
      comment = Comment.find(params[:id])
    end

    def comment_params
      params.permit(:content, :user_id, :post_id)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def render_not_found_response
      render json: { error: "Post not found" }, status: :not_found
    end
end
