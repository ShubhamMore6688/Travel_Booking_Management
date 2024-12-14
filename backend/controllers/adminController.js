import { packageModel } from "../models/package";

export const addPackage = async (req, res) => {
    try {
        const { title, description, price, availableDates, image } = req.body;

        const newPackage = await packageModel.create({
            title, 
            description, 
            price, 
            availableDates, 
            image

        })

        res.status(200).json({
            success: true,
            message: "package added successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

export const updatePacakge = async (req, res) => {
    try {
        const updatedPackage = await packageModel.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        if (!updatedPackage) {
          return res.status(404).json({ error: 'Package not found.' });
        }
        res.status(200).json({
          message: 'Package updated successfully!',
          package: updatedPackage,
        });
      } catch (error) {
        res.status(500).json({ error: 'Failed to update package.' });
      }
}

export const deletePackage = async (req, res) => {
    try {
        const deletedPackage = await packageModel.findByIdAndDelete(req.params.id);
        if (!deletedPackage) {
          return res.status(404).json({ error: 'Package not found.' });
        }
        res.status(200).json({ message: 'Package deleted successfully!' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete package.' });
      }
}