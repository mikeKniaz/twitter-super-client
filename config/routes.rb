class ActionDispatch::Routing::Mapper
  def draw(namespace)
    instance_eval(File.read(Rails.root.join("config/routes/#{namespace}.rb")))
  end
end

Rails.application.routes.draw do
  root to: 'v1/twitts#new'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  
  draw :v1
  draw :admin
end
