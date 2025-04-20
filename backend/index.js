import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
import db from "./config/database.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRoute)

try {
    await db.authenticate();
    console.log("Database connected...");
    await db.sync();
  } catch (error) {
    console.error("Connection error:", error);
  }

app.listen(5000, () => {
    console.log('Server up and running...')
})