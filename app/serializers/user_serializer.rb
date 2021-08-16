class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :image, :level
  has_many :comments
  has_many :posts
end
