class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image, :level, :posts
  has_many :comments
  has_many :posts
end
