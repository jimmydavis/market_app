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
      redirect_to root_path, notice: "Logged in successfully!"
    else
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
