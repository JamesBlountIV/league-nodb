const express = require("express");

const app = express();
app.use(express.json());

app.post("/api/league", )
app.get("/api/league", )
app.put("/api/league", )
app.delete("/api/league", )

const port = 9000;
app.listen(port, () => {
    console.log(`Live server on port: ${port}`);
})
