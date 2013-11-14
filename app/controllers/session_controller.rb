class SessionController < ApplicationController

# Session starts when a user logs in
  def new
    @user = User.new
  end

  def create
    email = params[:email]
    password = params[:password]
    user = User.where(email: email).first
    if user && user.authenticate(password)
      session[:user_id] = user.id
      # TODO We probably want all flash notices/messages to be AJAX/jQuery messages that fade in and fade out
      # flash[:notice] = "You have successfully logged in!"
      redirect_to root_path, notice: "Logged in successfully!"
    else
      # flash[:error] = "Incorrect email or password, please try again!"
      # TODO haven't set up login path
      # Not sure what we're going to do here,
      # want to have AJAX login so not sure if it would be a path or not
      redirect_to root_path, notice: "Incorrect email or password. Please try again..."
    end
  end

  # destroy
    # actually removes the userid from the session
      # session[:user_id] = nil

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You have successfully logged out!"
    redirect_to root_path
    # redirect to the root (welcome#index)
  end

end
