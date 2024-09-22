import express from "express"
import "dotenv/config"
import bodyParser from "body-parser"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log("server is running at http://localhost:" + PORT)
})