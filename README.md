market_app
==========
##Project description:

The aim of our project is to **make finding farmers markets in NYC easier**.

We are using a dataset from the New York State open data portal to create our initial database.  We will display the information about the location and times of operation on a web application that users can freely navigate. The information displayed upon initially visiting the site will change week-to-week depending on the markets in operation that week.

Users will have the option to login to save favorite markets to their profile.

This is the basis of our app and we see a number of ways we can extend the functionality (beyond what we are proposing for this project)

1) The application can allow users to comment on, rate, and review different markets as well as create a shopping list

2) The site can highlight some of the local produce users are likely to see during a trip to one of these markets
 
3) We would like to eventualy build the functionality to enable vendors to  create profiles on the site and communicate with users about upcoming products / produce for sale and even real-time updates (e.g. what is in stock, out-of-stock) using twilio, email, and/or twitter

4) We would like to extend this application to cover the farmers markets in the rest of New York state, and perhaps extend it to cover other states and perhaps even eventually interface with travel websites

-----
##Description of MVP

Our MVP will display a map of NYC and using D3.js will display the number of farmers markets in different neighborhoods by week.  The current date will be indicated on the page.

Users will be able to select which neighborhood they are interested in by clicking on a circle indicating the number of markets in that neighborhood to see a list of the markets and additional information about their days and hours of operation, the specific address of the market, etc.

Users will be able to login to the site and save markets to their favorites that will be displayed on a user dashboard page.


##User Stories for MVP
```
1) 
As an AUTHORIZED user …
I want to click on a favorites button on the left-hand box under the market details
so that I can add the particular market to my dashboard
```
```
2)
As an AUTHORIZED user …
I want to view my dashboard of favorites
So I can keep track of all the information about my favorite markets
```

![image](https://www.dropbox.com/s/ogb2ga8cue30ek3/image-3.jpeg)

**authorized user favorites page**

```
3) 
As an UNAUTHORIZED user …
I want to be able to signup for an account by clicking on the signup button/link
so I can have a dashboard/favorites

```

```
4) 
As an UNAUTHORIZED user …
I want to be able to signup and automatically login
so that I don’t have to login again
	Jimmy has code
```

```
5) 
As an UNAUTHORIZED user …
I want to be able to click on the login button
so that I can view my dashboard/favorites (via ajax)
```

```
6) 
As an UNAUTHORIZED user …
I want to click on the home button from anywhere
so I can return to the main screen (markets available that week)
```

```
// NAVIGATION BAR
I want to see and be able to click on: 
Home / Name of site
Login
SignUp
Logout
Dashboard/Favorites
so that I can go directly to that section
```

```
7) 
As an UNAUTHORIZED user …
I want to click on the favorites button for a particular market
so that I can be directed to login/signup
	Tom has code
```
![image](https://www.dropbox.com/s/mzi4amnlsr3yldt/photo.jpg)

**main page layout**

![image](https://www.dropbox.com/s/z2bfurhy27pz0ad/Screen%20Shot%202013-11-10%20at%202.16.29%20PM.png)

**geolocations of all 131 farmers markets in NYC**

```
8) 
As an UNAUTHORIZED user …
I want to see a NYC map of the location of the markets
so I can identify markets open this week that I can visit
(This is the main user story and needs to be broken down into tasks)
```

```
9) 
As an UNAUTHORIZED user …
I want to hover over a bubble in a neighborhood
so that I can see the number of markets open, name of neighborhoods in that area this week
	Potentially not MVP
```

```
10) 
As an UNAUTHORIZED user …
I want to click on a bubble for a neighborhood
so that I can view a list of all of the markets (in that area this week) in the left-hand box
```
---
**// LEFT-HAND BOX**

```
11) 
As an UNAUTHORIZED user …
I want to see the list of open market names and locations displayed in black and closed markets displayed in grey
so that I know which markets are available for a week (with all other info for each market for MVP)
```

![image](https://www.dropbox.com/s/bymyjmok7xms7my/image-1.jpeg)

**detailed info page- info & directions**

```
12) 
As an UNAUTHORIZED user …
I want to click on a market name
so that all info about specific market will be viewed immediately below that name (address, hrs of operation, link, contact, phone, operation season)
	not MVP
```

```
13) 
As an UNAUTHORIZED user …
I want to be able to click on the listed market link
so i can be redirected to the market’s website
```

```
14) 
As an UNAUTHORIZED user …
I want to click on a market name (for a second time)
so that all the info goes away and I’m returned to the full list of market for an area
```
----

##Models & Routes

We will have 2 models:

1) Markets 

-	routes
	- Index
	- Show

2) Users

-	Routes
	-	New
	-	Create
	-	Show
	-	Edit
	-	Update
	-	Delete

---

##Data Model

4 tables 

	- 3 data tables
		- markets table
		- users table
		- dates table

	- 1 join table
		- favorites

![image](https://www.dropbox.com/s/jpduk4silrlck03/photo1.JPG)

**sketch of data model**

---
##Libraries we intend to use





