class ActionDispatch::Routing::Mapper
  def draw(namespace)
    instance_eval(File.read(Rails.root.join("config/routes/#{namespace}.rb")))
  end
end

Rails.application.routes.draw do
  draw :v1
  draw :admin
  root to: 'v1/twitts#new'
end
