import mongoose from "mongoose";

const packageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      availableDates: {
        type: [Date], 
        required: true,
      },
      image: {
        type: String, 
        required: true,
      },
    }, { timestamps: true }
)


export const packageModel = mongoose.model('packageModel', packageSchema)