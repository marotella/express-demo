const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) =>{
    let friends = ['Nitin', 'Eric', 'Jerry', 'Cameron', 'Riley'];
    res.status(200).send(friends);
})

app.listen(4000, () => console.log("Server is running on 4000."));


