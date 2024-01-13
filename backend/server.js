const express = require('express');
const app = express();
const chats = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


require('dotenv').config();
connectDB();

app.use(express.json()); // this is for acceptin JSON data

app.get('/', (req, res) => {
    res.send("api is running");
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    var singleChat = chats.find((c)=> {
        return c._id === req.params.id;
    })
    console.log(req);
    console.log(singleChat);
    res.send(singleChat);
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on PORT ${port}`));