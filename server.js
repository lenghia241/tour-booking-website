const app = require('./app');
// START THE SERVER
const port = 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
