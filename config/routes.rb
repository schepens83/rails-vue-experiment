Rails.application.routes.draw do
  resources :day_scores
  get 'home' => 'pages#home'
  get 'canvas' => 'pages#canvas'
  get 'calculator' => 'pages#calculator'
  get 'to-do' => 'pages#to_do'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
end
