const path = require('path');

module.exports = function(app) { 
// Route to send user by AJAX request to 'home' page 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Route to send user by AJAX request to 'survey' page 
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
}
