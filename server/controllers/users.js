import UserInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
   
    try {
        const user = await UserInfo.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error})
    }
}
export const createUser = async (req, res) => {
    
    const user = req.body;
    const newUser = new UserInfo(user);
    // var formattedDate = choose_date.split("-").reverse().join("-"); write this code when your date format is yyyy-mm-dd and you want in dd-mm-yyyy format.
    
    try {
        await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error})

    }
}
