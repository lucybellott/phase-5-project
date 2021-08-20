class Post < ApplicationRecord
  belongs_to :user
  has_many :comments 
  has_many :comment_users, through: :comments, source: :user 

  # validates :title, :claim, :fact, :image, :source_link, :category, presence: true
  # # validates :title, :claim, :fact, :image, :source_link, length: { minimum: 2 }
  
end
