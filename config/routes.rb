MarketApp::Application.routes.draw do

# Our landing page/homepage will be the welcome#index
  root to: 'welcome#index'
  resources :users

end
#== Route Map
# Generated on 11 Nov 2013 10:23
#
