import express from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send("Welcome to test server");
})

app.listen(port, () => {
    console.log("server running on port" + port)
})