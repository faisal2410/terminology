/*
Cookies are small pieces of data that are stored on the client's computer by the server. They are commonly used to store user information or preferences, and can be accessed and modified by both the client and the server.

Here's an example of how to use cookies in a MERN stack application:

In the server-side code (Node.js), you can use the cookie-parser middleware to handle cookies. Here's an example of how to use it:


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// define routes and other middleware...
This code imports the cookie-parser middleware and adds it to the Express app's middleware stack. This makes it possible to read and write cookies in your routes and other middleware.

In a route or middleware function, you can set a cookie using the res.cookie method. Here's an example:


app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'hello world', { maxAge: 900000, httpOnly: true });
  res.send('Cookie set!');
});

This code sets a cookie called myCookie with a value of hello world, and sets the maxAge option to 900,000 milliseconds (15 minutes) and the httpOnly option to true. The httpOnly option makes the cookie accessible only to HTTP requests, not to JavaScript code on the client's computer.

In a route or middleware function, you can read a cookie using the req.cookies object. Here's an example:


app.get('/get-cookie', (req, res) => {
  const myCookieValue = req.cookies.myCookie;
  res.send(`Cookie value: ${myCookieValue}`);
});

This code reads the myCookie cookie from the req.cookies object and sends its value in the response.

Cookies can be useful for storing user information or preferences, such as login credentials or language settings. However, they can also be a security risk if not used properly, as they can be accessed and modified by anyone who has access to the client's computer. To mitigate this risk, it's important to use the httpOnly option and to avoid storing sensitive information in cookies.






*/ 