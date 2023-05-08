import express, { Request, Response } from "express"
import { sampleProducts } from "./data"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { productRouter } from "./routers/productRouters"
import seedRouter from "./routers/seedRouters"
dotenv.config()
const MONGODB_URI = process.env.CONNECTION_URL ||"hello world"
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch((err) => {
    console.log(err.message)
  })
const app = express();
app.use(
    cors({
        credentials: true,
        origin:['http://localhost:5173']
    })
)
app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)
const PORT=4000
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})