const { createRequestHandler } = require("@remix-run/node");
const { installGlobals } = require("@remix-run/node");
const express = require("express");
const path = require("path");

installGlobals();

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Handle remix requests
app.all(
  "*",
  createRequestHandler({
    build: require("./build/index.js"),
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});