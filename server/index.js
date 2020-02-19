const express = require("express");
const config = require("config");
const path = require("path");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3100;
// const Api = require("./api");
const appRoot = require("app-root-path");

app.use(cors());
app.use(express.json());
// app.use(
//   fileUpload({
//     debug: true
//   })
// );

// app.use("/api", Api);

// app.use(
//   "/graphql",
//   bodyParser.json(),
//   expressGraphQL({
//     schema,
//     graphiql: true
//   })
// );

app.listen(port, () => console.log(`Listening on port ${port}`));
