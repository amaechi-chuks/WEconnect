# WEConnect #

WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.


## Getting Started ##
- create a repository on my local machine and named it WeConnect. Inside the repository, I make three directories namely: 
 **server**
 **template**
 **client**
- On template directory, thats a folder I will be building up my UI template. lets start with the template directory.

- Inside template folder, I initialize git by typing git init on my command line. git will start tracking the changes on the template folder. I also need to initialize npm to have my dependences by typing npm init on my command line.
 
 - I created a github repository on my github account and named it WeConnect. This is going to be my remote repository for my project. On the command line, I added the remote origin to my local machine by typing git remote add  origin https://github.com/amaechi-chuks/WEconnect.git.

 - I created a branch called develope and from develope branch, I branch out to my feature branches namely: 
 - **sign-up**
 - **sign-in**
 - **register business**
- **business catalog**
- **business profile**
and after working on each branch, I merge into develop branch.




 

## BACKEND-END (SERVER) ##

**Config for server setup**

HOW TO INSTALL SIMPLY RUN IN PROJECT/SERVER DIRECTORY:

npm install {INSTALLING ALL PROJECT DEPENDENCIES} npm start OR npm run start:dev {RESTART THE SERVER WHEN UPDATING CHANGES}

visit host http://localhost:8020 and test the following routes:

test get: http://localhost:8020/businesses/businessId and other defined routes
