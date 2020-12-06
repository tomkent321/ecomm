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
    await Product.updateMany({}, { $set: { subject: 'scenery' } })

    console.log('Data Added!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

changeRemoteDb()
