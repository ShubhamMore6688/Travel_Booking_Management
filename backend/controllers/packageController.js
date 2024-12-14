import { packageModel } from "../models/package.js"

export const getAllPackages = async (req, res) =>{
    try {
        const packages = await packageModel.find();

        return res.status(200).json({
            success: true,
            packages
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

export const getPackageById = async (req, res) => {
    try {
        const {id} = req.params;

        const myPackage = await packageModel.findById(id)
        if(!myPackage){
            return res.status(404).json({
                success: false,
                message: "package not found"
            })
        }

        return res.status(200).json({
            success: true,
            myPackage
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}