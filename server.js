const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');

// Init App
const app = express();
app.use(express.json());
app.use(cors());

requireDir("./src/models");


// Pattern Router
app.use("/api", require("./src/routes"));

app.listen(3000);