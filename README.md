# Technologies & Versions

- React - 17.0.2
- React-Router - 6.3.0
- Recharts - 2.1.10
- Axios - 0.27.2

# Installation

## Required

- npm - 8.1.2
- yarn - 1.22.15

## Back-end installation

First, you need to download the back-end of the site: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

Once downloaded, you can follow the instructions to launch it. You can install the dependencies with the following command:

### `npm install`

Launch the back-end with the following command: 

### `npm start`

If no other application is running, port 3000 will be used by default.

## Front-end installation

First, you need to download or clone the Front-end project: https://github.com/AnthoLFB/AnthonyLefebvre_12_23052022

Once the project is downloaded, install the project dependencies with this command:

### `npm install`

Launch the Front-end with the following command: 

### `npm start`

If you started the back-end before the front-end then a message asking you to change the port should appear, just type "y" in the command prompt. The project should then run on port 3001.

Go to the following link to find the functional project: http://localhost:3001

/!\ Be careful, if you do not use port 3000 for the back-end, you will have to modify the environment variable located in the .env file of the front-end project. Then put the port you want to use :

(Example : REACT_APP_API_SERVER_ADDRESS="http://localhost:YourPort", REACT_APP_API_SERVER_ADDRESS="http://localhost:3002").
