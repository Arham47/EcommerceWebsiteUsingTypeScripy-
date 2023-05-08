import express from "express"
import asyncHandler from "express-async-handler"
import { ProductModel } from "../model/productModel"
import { sampleProducts } from "../data"
const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    res.json({ createdProducts })
  })
)
export default seedRouter