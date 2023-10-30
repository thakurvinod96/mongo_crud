const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = "mongodb://localhost:27017/taskmanager"; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

