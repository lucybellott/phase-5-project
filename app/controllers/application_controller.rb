class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end

  def authorize
    user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless user
  end
end
