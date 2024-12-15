import { bookingModel } from "../models/booking.js";
import { packageModel } from "../models/package.js";
export const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      email,
      phoneNumber,
      numberOfTravelers,
      specialRequests,
      packageId,
    } = req.body;

    // Find the package to calculate the total price
    const selectedPackage = await packageModel.findById(packageId);


    if (!selectedPackage) {
      return res.status(404).json({ error: "Package not found." });
    }

    // Calculate total price
    const totalPrice = selectedPackage.price * numberOfTravelers;

    // Create a new booking
    const savedBooking = await bookingModel.create({
      customerName,
      email,
      phoneNumber,
      numberOfTravelers,
      specialRequests,
      packageId,
      totalPrice,
    })


    res.status(201).json({
      message: "Booking created successfully!",
      booking: savedBooking,
    });
  } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            
        })
  }
};


export const getBookingDetails = async (req, res) =>{
  try {
    const {id} = req.params;
    const responseData = await bookingModel.findById(id);
    const bookingDetail = responseData.toObject();
    if(!bookingDetail){
      return res.status(404).json({
        success: false,
        message: "booking not found"
      })
    }

    const packageDetail = await packageModel.findById(bookingDetail.packageId);
    bookingDetail.packageName = packageDetail.title

    
    res.status(200).json({
      success: true,
      bookingDetail
    })

  } catch (error) {
       res.status(500).json({
            success: false,
            message: "internal server error",
            
      })
  }
}