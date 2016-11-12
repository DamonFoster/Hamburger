// Your app will store every burger in a database, whether devoured or not.
// -1. npm install express express-handlebars method-override body-parser mysql --save.
// -2. Require express, method-override, body-parser
// -3. see: db/schema.sql
// -4. see /db/seeds.sql
// -5. Run the schema.sql and seeds.sql files into the mysql server from the command line
// -6. Make sure you're in the db folder of your app.
// -7. Start MySQL command line tool and login: mysql -u root -p.
// -8. With the mysql> command line tool running, enter the command source schema.sql. 
// -9. Run the file: source seeds.sql.
// -10. Close out of the MySQL command line tool: exit.

var express = require('express');
var method-override = require('method-override');
var body-parser = require('body-parser');

// Config Setup:
// 11. see connections.js


// Model setup:
// See burger.js

// Controller setup:
// 18.  /burgers_controller.js file, import the following:
	// Express
	// burger.js
	// Create the router for the app
	// export the router at the end of your file.

// View setup:
// 19. Setup the main.handlebars file so it's able to be used by Handlebars.
// 20. Setup the index.handlebars to have the template that Handlebars can render onto.
// 21. Create a button in index.handlebars that will submit the user input into the database.

// Directory structure:

// .
// ├── config
// │   ├── connection.js
// │   └── orm.js
// │ 
// ├── controllers
// │   └── burgers_controller.js
// │
// ├── db
// │   ├── schema.sql
// │   └── seeds.sql
// │
// ├── models
// │   └── burger.js
// │ 
// ├── node_modules
// │ 
// ├── package.json
// │
// ├── public
// │   ├── assets
// │   │   ├── css
// │   │   │   └── burger_style.css
// │   │   └── img
// │   │       └── burger.png
// │   └── test.html
// │
// ├── server.js
// │
// └── views
//     ├── index.handlebars
//     └── layouts
//         └── main.handlebars
