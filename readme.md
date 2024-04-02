**\*\*\*\***\***\*\*\*\***STEPS FOR INSTALL MONGODB SERVER AND SHELL IN VM AND CONNECTING THE NODE APP**\*\*\*\***\*\*\*\***\*\*\*\***

1. Install Ubuntu 20.04
2. Login to your VM
3. sudo apt update // Update package manager
4. sudo apt install openssh-server // setup for sftp
5. hostname -I // Get hostname (IP)
6. Open Filezilla
7. Connect to filezilla using: hostname, user, password and port=22
8. Download and transfer mongodb deb file: [server mongodb-org-server_7.0.7_amd64.deb](https://www.mongodb.com/try/download/community)
9. sudo dpkg -i mongodb-org-server_7.0.7_amd64.deb // Dowload the package from the same directory
10. sudo systemctl status mongod // Check mongodb server status
11. sudo systemctl start mongod // Start mongodb server
12. Repeat step 8 & 9 for downloading mongodb shell // https://www.mongodb.com/try/download/shell
13. mongosh // This will display the connection between the mondb server and the shell. It starts the mongodb shell
14. Check by using commands like: show dbs, use <db_name>
15. npm -i mongoose@5 // Install mongoose driver for connecting mongodb server and the node app
16. Set a ENV variable for storing the <db_connection_string> // For local its typically: mongodb://localhost:27017/<db_name>
17. Use the connection varibale in the app to connect to the db and log proper conncetion response

**************\*\*\***************\***********\*\*\*\***********END**************\*\***************\*\*************\*\*************

**********************\*\***********************SETTING UP NODE APP IN VM************************\*\*************************

1. sudo apt install nodejs -y // Install node in VM
2. git clone <GIT_REPO> // Clone the public git repo in VM
3. cd <GIT_CLONED_REPO> // Go inside project
4. npm install // Install node modules
5. mv config.env.example config.env // adding env
6. node <FILE_NAME> // For starting the server

****************************\*****************************END******************************\*******************************
