class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :rememberable, :trackable, :registerable, :recoverable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :validatable
end
