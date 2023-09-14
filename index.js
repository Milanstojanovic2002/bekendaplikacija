const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const fs = require("fs");

const Response = require("./models/response");
const connectDB = require("./config/db");
dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Zdravo");
});

app.post("/response", async (req, res) => {
    try {
        const { name, surname, email, genre, gender, comm } = req.body;

        const response = await Response.create({ name, surname, email, genre, gender, comm });

        const respJson = JSON.stringify(response);
        fs.writeFile(`./data/${response.id}.json`, respJson, "utf8", (error) => {
            if (error) { console.log("Greska pri uspisu fajla") };
            console.log("Uspesno radi");
        });

        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server slusa na portu ${port}`);
});