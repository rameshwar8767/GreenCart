import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
//Add Product : /api/product/add
export const addProduct = asyncHandler(async (req, res) => {
    // Add new product logic here

})

//Get Products : /api/product/list
export const getProducts = asyncHandler(async (req, res) => {
    // Get all products logic here
})

//Get Product : /api/product/:id
export const getProduct = asyncHandler(async (req, res) => {
    // Get single product logic here
})

//Update Product : /api/product/update/:id
export const updateProduct = asyncHandler(async (req, res) => {
    // Update product logic here
})

//Change Product inStock : /api/product/stock
export const changeStock = asyncHandler(async (req, res) => {
    // Change product status logic here
})