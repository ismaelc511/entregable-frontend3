### AUTHOR:

Ismael Alexander Carvajal González

***

## TABLE OF CONTENTS
1. [PROJECT TOOLS :herb:](#project-tools)
2. [TO BE TAKEN INTO ACCOUNT :calling:](#to-be-taken-into-account)
3. [EXECUTION :metro:](#execution)

***
# PROJECT TOOLS: 

To execute this project we need the following tools:

- :boom: _Have **Node.js** installed with its version 16.13.1_
- :boom: _Through **npm install** the packages will be downloaded and saved in the node_modules_
- :boom: _Create the react application using the following command **create-react-app nombre-del-proyecto**_


***
# TO BE TAKEN INTO ACCOUNT: 

The present project realizes a shopping cart for an e-commerce and has the following organization:

- :capital_abcd: node_modules: Is a directory that is created in the root folder of our project when we install packages or dependencies via npm.

- :capital_abcd: public: Public folder contains static files like index.html, javascript library files, images and other assets etc. which you don't want to be processed by webpack. The files in this folder are copied and pasted as they are directly in the build folder.

- :capital_abcd: src: It is the main folder of the application and will house 4 files:

1. **Cabecera.js:** It is a component that has no child components, no states, no methods, but has props that are inherited from APP.
2. **Item.js:** It is a component that has no child components, it has a number where the stock number defined by the parent is stored.
3. **Listado.js:** It is a parent component of Item, it does not need to handle a state, it has no methods, it receives the method to raise the state of the app and pass it to its child Item.
4. **Data.json:** Contains the information that is rendered on the page.


***
# EXECUTION:

To run the application, run the **npm start** command

***

