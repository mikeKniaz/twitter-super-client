namespace 'v1' do
  devise_for :users, controllers: {
    sessions: 'v1/users/sessions'
  }
end
