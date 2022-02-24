import "dotenv/config"
import express from "express" 
import { MongoConnection } from "./database/MongoConnection"
import { router } from "./routes/routes"

new MongoConnection().connect()

const app = express()

app.use(express.json())
app.use(router)


app.listen(5005, ()=> {
    console.log("Server Running on port 5000");
})