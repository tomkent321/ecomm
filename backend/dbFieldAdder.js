import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// import User from './models/userModel.js'
import Product from './models/productModel.js'
// import Order from './models/orderModel.js'

import connectDB from './config/db.js'

// be sure to import the models for the collection to change
// called with:
// from the root
// node backend/dbFieldAdder.js       to add a field

dotenv.config()

connectDB()

const changeRemoteDb = async () => {
  try {
    //put the desired db change and collection below
    await Product.updateMany({ location: 'Tom K H '}, { $set: { location: 'Tom and Pam' } })
    // await Product.updateOne(
    //   { _id: '5f9a4f3e630f8b36a9f3fb43' },
    //   { $set: { reviews: [] } }
    // )

    console.log('Operation successful!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

changeRemoteDb()
