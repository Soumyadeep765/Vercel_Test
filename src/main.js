// src/main.js
module.exports = (req, res) => {
  if (req.url === '/') {
    res.status(200).send('This is the main route!');
  } else {
    res.status(404).send('Route not found');
  }
};
