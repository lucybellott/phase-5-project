class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :image, :claim, :fact, :source_link, :comments
  has_one :user
  has_many :comments
end
