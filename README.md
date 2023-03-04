Amrita Sidhu - Project / Scrum Manager <br>
Abhiek Bist - Tech Lead <br>
Griffin Wilchuk - Client Liaison <br> 
Jake Daongam - QA Leader <br>

# EquiFood-App-A - Develop Branch
#### All important team documents and initial code saved in this development branch. 
<br>

#### Currently includes:
- Team Agreement 
- Early draft of requirements
- Client questions 
- User scenarios
- Prototype(s)
- Gantt Chart. 
- List of Usability Tasks
- Front End Aspects:
    - Initial Ionic Build

- Back End Aspects:
    - Rough draft of DDL for Food Table
    - Rough draft of DDL for Restaurant Table
    - Rough draft of DDL for Admin Table
    - Rough draft of DDL for RestaurantAdmin Table

- A rough plan for January
- Notes from Professor/TA meetings in Jan
- Equifood Priority Tasks Document 
<br>

#### Will include:

    - TA demo meeting suggestions
    - Screens navigation chart on Lucid Chart for us and future developers.

# Equifood App Purpose:
The purpose of Equifood is to aid in reducing food wastage of restaurants. This app presents restaurant owners the idea of giving away excess food they have at the end of each day at discounted prices, or for free. 

Equifood administrators manually keep track of the money amount Equifood has saved individuals from restaurants. These are considered as donations.

<br>

# About our Software:

Our software will allow restaurant owners to post their discounted/free offers for individuals to see and will automatically keep track of donation amounts.

# Sign in Portals Included: 

    - Customer View
        - Includes Restaurants, Restaurant specifics, add / delete to cart, cart, reserve, timepicker, searchbar, header navigation portion, profile with various setting options. 
        Profile Includes:
            - View Recent Orders
            - Edit Account
            - Help
            - Privacy
            - About
    - Restaurant Owner View:
        - Includes the restaurant ownerr view
    - Admin View
        - Includes donations, restaurant requests, add / remove restaurants / the ability to navigate into and look at restaurants deeply. 

# Tech Stack:
Our client preferred we use one of the two MERN stack variations (MariaDB or MongoDB)
The current stack chosen for the project is a MERN (MariaDB, Express, React Native, NodeJS) stack. This is due to the low cost and abundance of documentation for this popular stack. Our team decided to use the MariaDB variation. We prefer MariaDB as its relational model is crucial for our queries and additions of new available products. 
<br>

<br>
Information for setting up the MERN stack can be found in the following links 
<br>
<br>
[Nodejs](https://nodejs.org/en/download/)
<br>
<br>
[React Native](https://reactnative.dev/docs/environment-setup)
<br>
<br>
[MariaDB Setup](https://mariadb.com/get-started-with-mariadb/)
<br>
<br>
[Expressjs](https://expressjs.com/en/starter/installing.html)
<br>
<br>


# Project Milestones:
Milestone 1: Basic Front End and back end (Allow users to see restaurant and food options) <br>
Milestone 2: Create Databases, improve navigation (Clicking things bring you to the proper pages and show proper values) <br>
Milestone 3: Deploy and populate databases <br>
Milestone 4: Extensively test, document, and prepare for handoff







<br>

# User Groups:

### The administrators, the individuals in ownership of Equifood. 
Their purpose in using the app will be monitoring that restaurant owners are using Equifood as per their guidelines. They will have the option to approve, deny, or remove restaurants from this app. 
Admin will have access to viewing donation amounts. 
<br>


### The Restaurant Representatives.
The app will allow them to post information about their restaurant and food options available. 
They will update total donations collected from their restaurant.
<br>

### Individuals.
Will be able to use the app to view available restaurants and food options.
<br>
<br>

# How to Run locally:

1. Make your way to Code Directory (../EquiFood-App-A/EquiFood-A-ReactNative)
1. Several packages may need to be installed:
    - First ensure latest node version is being used:
            - For Apple check with ```nvm use --lts```
            - For Android check with ```node -v```
    - Expo: ```npm install -g expo-cli```
    - React-Navigation: ```npm install @react-navigation/native```
    - React: ```npm install "react@18.1.0"```
    - Additionally: ```"npm i react-navigation-drawer"```
1. Start server by going into server directory (../EquiFood-App-A/EquiFood-A-ReactNative/server) and run ```nodemon server```
1. In terminal, run ```npm start``` to run Expo.
1. Either scan the QR code on your phone or run an emulator by following the menu in the terminal

# How to access the database:
1. Login to 
[SkySQL](https://id.mariadb.com/?next=/openid/authorize%3Fresponse_type%3Dcode%26client_id%3D480075%26redirect_uri%3Dhttps%3A//cloud.mariadb.com/navpage.do%26scope%3Dprofile%2520mariadb%2520openid%2520email%26state%3Dhttps%253A%252F%252Fcloud.mariadb.com%252Fskysql%253Fid%253Dmy_services)
2. Add your current IP address to the "IP allowlist for service access"
3. Download the certificate authority chain and follow the instructions under "Connect to service"

# UI Features:

    - Browsing Restaurant page
    - Browsing Food Options from Restaurant page
    - Detailed product page
        - Can reserve item
    - View Cart page
        - Can remove items 
    - User profile page
        - Just a mock up, still working on
