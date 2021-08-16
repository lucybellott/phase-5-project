class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    
    has_many :comments, dependent: :destroy
    has_many :comment_posts, through: :comments, source: :post

    has_secure_password

    validates :name, :password, presence: true
    validates :username, presence: true, uniqueness: true
    

end
