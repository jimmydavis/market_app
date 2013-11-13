class UsersController < ApplicationController


  # GET /users
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users }
    end
  end


  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end


  # POST /users
  # POST /users.json
  def create
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'Signed up successfully.' }
        format.json { render json: @user, status: :created, location: @user }
        # The below line will create a logged in session when a user signs up
        session[:user_id] = @user.id
      else
        format.html { redirect_to root_path, notice: 'Error signing up, please try again...' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: { first_name: nil, last_name: nil, email: nil, latitude: nil, longitude: nil } }
    end
  end


  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        # TODO same as above, we can fade in and out these notices in a function
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render json: @user }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { render json: {success: true} } # Note that even though i have destoryed, the *object* is still accessible
    end
    redirect_to root_path
  end


end
