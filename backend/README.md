# Assessment system
Assessment system assignment for metaschool FS

### The DB
SQLite db

## Getting Started
### Option 1 using shell script
You can simply get the server up by running ./start.sh in termial in the dirrectory where project lies. This script will nuke the node_modules and clean install before getting the server up
### Option 2 Manual Steps
Open terminal and cd into the project dirrectory.
#### Installing dependencies
In project's root dirrectory run **npm i**
#### Starting the server
After installing dependencies in above step, in project's root dirrectory run **npm run clean-start** to nuke the node modules, reinstall and start the server.

### Useful Things

####db migration
- run "node_modules/.bin/sequelize db:migrate" to sync all db models

####populate initial db data
- run the following command in terminal to populate roles i.e admin and student in the roles table
````
node_modules/.bin/sequelize db:seed --seed 20230213005635-seed-roles.js
````
- run the following command in terminal to populate initial testing user with following data
````
node_modules/.bin/sequelize db:seed --seed 220230213005640-seed-users
````
````
name: test
email: test@test.com
password: Testing1
````

After getting the server up locally, app becomes available at: http://localhost:8000/

You can also checkout swagger documentation while running the server locally at http://localhost:8000/api-docs/#/

##### Versions Used While Development
node v18.8.0
npm 8.18.0
