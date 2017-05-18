const express = require('express');

// Create new app
// set the port of our application
// process.env.PORT lets the port be set by Heroku
const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
