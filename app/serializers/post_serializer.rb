class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :image, :claim, :fact, :source_link
  has_one :user
end
