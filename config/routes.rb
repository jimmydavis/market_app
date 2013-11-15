MarketApp::Application.routes.draw do

# Our landing page/homepage will be the welcome#index
  root to: 'welcome#index'
  get '/login'  => "session#new"
  post '/login' => "session#create"
  get '/logout' => "session#destroy"
  get '/dashboard' => "users#show"


  resources :users
  resources :markets

end
#== Route Map
# Generated on 14 Nov 2013 00:10
#
#       login GET    /login(.:format)            session#new
#             POST   /login(.:format)            session#create
#      logout GET    /logout(.:format)           session#destroy
#   dashboard GET    /dashboard(.:format)        users#show
#       users GET    /users(.:format)            users#index
#             POST   /users(.:format)            users#create
#    new_user GET    /users/new(.:format)        users#new
#   edit_user GET    /users/:id/edit(.:format)   users#edit
#        user GET    /users/:id(.:format)        users#show
#             PUT    /users/:id(.:format)        users#update
#             DELETE /users/:id(.:format)        users#destroy
#     markets GET    /markets(.:format)          markets#index
#             POST   /markets(.:format)          markets#create
#  new_market GET    /markets/new(.:format)      markets#new
# edit_market GET    /markets/:id/edit(.:format) markets#edit
#      market GET    /markets/:id(.:format)      markets#show
#             PUT    /markets/:id(.:format)      markets#update
#             DELETE /markets/:id(.:format)      markets#destroy
