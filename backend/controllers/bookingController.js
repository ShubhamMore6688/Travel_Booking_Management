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
    const newBooking = new bookingModel({
      customerName,
      email,
      phoneNumber,
      numberOfTravelers,
      specialRequests,
      packageId,
      totalPrice, 
    });

    const savedBooking = await newBooking.save();
    res.status(201).json({
      message: "Booking created successfully!",
      booking: savedBooking,
    });
  } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
  }
};
