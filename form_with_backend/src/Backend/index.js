const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();
const routes = require('./Routes/routes')

app.use(express.json());
mongoose.connect("mongodb+srv://mohsin:mohsinali@cluster0.ixvqejl.mongodb.net/AttendanceApplication?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});
app.use(cors());


app.use('/api', routes)

let PORT = process.env.PORT || 4000;

app.use(express.static("public"));
app.use("/public", express.static("public"));
app.listen(PORT, () => {
    console.log("run Port on 4000")
});