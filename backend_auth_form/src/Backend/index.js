const express = require('express')
const notes = require('./data/data')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors");
const userRoutes = require('./Routes/userRoute')

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Api is running")
})
app.get("/api/notes", (req, res) => {
    res.json(notes)
})
app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id == req.params.id)
    console.log(req.params)
    res.json(note)
})


mongoose.connect("mongodb+srv://mohsin:mohsinali@cluster0.ixvqejl.mongodb.net/AttendanceApplication?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});
app.use(cors());

app.use("/api", userRoutes)
app.listen(4000, console.log('App is running'))