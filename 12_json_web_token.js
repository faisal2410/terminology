/*
JSON Web Tokens (JWTs) are a way to securely transmit information between parties in a compact and verifiable way. They are commonly used in web applications for authentication and authorization purposes.

Here's an example of how to use JWTs in a MERN stack application:

Install the required packages: You'll need to install the jsonwebtoken package to work with JWTs in your Node.js server.

npm install jsonwebtoken

Create a route for user authentication: In your server-side code, create a route that handles user authentication. For example, you might have a login route that checks a user's credentials and generates a JWT if the credentials are valid.

const jwt = require('jsonwebtoken');
const secret = 'mysecretkey';

router.post('/login', async (req, res) => {
  // Check user credentials
  const user = await User.findOne({ email: req.body.email });
  if (!user || !user.isValidPassword(req.body.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT
  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

  res.json({ token });
});
Verify the JWT on the client side: In your client-side code, store the JWT in local storage or a cookie after a user logs in. Then, include the JWT in the headers of subsequent requests to authenticated routes.

// Login function
const login = async (email, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const { token } = await response.json();

  // Store the JWT in local storage or a cookie
  localStorage.setItem('token', token);
};

// Example of an authenticated request
const getProtectedData = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch('/api/protected', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Unauthorized');
  }

  const data = await response.json();

  return data;
};
Verify the JWT on the server side: In your server-side code, verify the JWT before allowing access to protected routes.

const jwt = require('jsonwebtoken');
const secret = 'mysecretkey';

router.get('/protected', async (req, res) => {
  // Verify the JWT
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    req.userId = decodedToken.userId;
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Get protected data
  const data = await getData();

  res.json({ data });
});
By using JWTs, you can create a secure and scalable authentication system in your MERN stack application.







*/ 