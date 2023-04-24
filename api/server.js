import express, { urlencoded } from "express"
import sequelize from "./config/db.js"
import "./models/Student.js"
import router from "./routes/index.js"
import cors from "cors"

const app = express()
app.use(cors());

app.use(express.json())
const PORT = 3001

app.use(router)

async function main() {
try{
    await sequelize.sync()
    console.log("Db is connect")
    app.listen(PORT)
    console.log("Server On")
} catch (error) {
    console.error("error  db: " + error)
}
}

main();