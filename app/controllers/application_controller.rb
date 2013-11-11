class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user

  def current_user
    if session[:user_id]
      return User.where(:id => session[:user_id]).first
    else
      return nil
    end
  end

  protected

  def confirm_logged_in
    unless session[:user_id]
      flash[:error] = "You must have an account to access this page!"
      redirect_to '/signup'
      return false
    else
      return true
    end
  end
end
