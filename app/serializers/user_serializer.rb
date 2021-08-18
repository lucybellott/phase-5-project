class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image, :level
  has_many :comments
  has_many :posts
end
