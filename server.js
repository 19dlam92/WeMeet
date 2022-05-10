const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
app.use( cors({ credentials: true, origin: 'http://localhost3000/' }) )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( cookieParser() );
app.use( express.static("images") );
require('dotenv').config();
require("./server/config/mongoose.config")
require("./server/routes/datingProfile.route")(app)

app.listen( port, () => console.log(`Listening on port: ${ port }`) );