const express = require('express');

const apiRoutes = require("./routes/apiroutes")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// require('./routes/apiRoutes')(app);
app.use(apiRoutes)
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });