# 🕹 Game Tracker

---
![image](https://user-images.githubusercontent.com/102194829/188749425-c9788e22-9e39-4ff5-a81c-4d0bbed32a04.png)

Link to website: https://press-start.herokuapp.com/ 

---
## 👋  Introduction
- Game tracker is a web-based application created as a group project by students of 100devs.
- This is designed using the MVC architecture with the 'authorization' so users can sign up and create a personal database to keep track of their backlogged and upcoming games. 

---
## 👩‍🏫  How to use the application? 
- After logging in using the username and passwords, users can add the game with 5 different properties including title, console, genre, rating and the default user ID.

- Once entered, users can have their own game library with a random generator suggesting the next game to play based on the genre and the assigned score.

---
## 🤷‍♂️  Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

## 💪  Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## 🖥  Install all the dependencies or node packages used for development via Terminal

`npm install` 
`npm run start`

---

## 🔨  Improvements on the Application

In future, we are considering having a provision where users can add notes describing the games that they have 
already played. Further, we can implement a dashboard where users are able to see the games they have already completed.

In addition, we wish to implement a dark mode feature because what is an app without dark mode? And finally, we can implement an API that houses game data that users can readily call upon instead of hard coding the games they have played themselves.

## ➕  Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎


Authors:
Chris
Andrew
Ryan
Anna
Brian
