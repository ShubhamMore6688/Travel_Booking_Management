import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        customerName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
          maxlength: 10
        },
        numberOfTravelers: {
          type: Number,
          required: true,
          min: 1,
        },
        specialRequests: {
          type: String,
          default: '',
        },
        packageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'packageModel', // reference of packageModel
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true, 
        },
      }, { timestamps: true }
)

export const bookingModel = mongoose.model('bookingModel', bookingSchema)