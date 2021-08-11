class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :comment_users, through: :comments, source: :user
end
