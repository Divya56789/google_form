import UserInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
   
    try {
        const user = await UserInfo.find();
        console.log("testing get request");
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
export const createUser = async (req, res) => {
    const {
        email,
        mobile_no,
        enrollment_no,
        name_of_learner,
        programme_code,
        study_centre_code,
        course_code,
        file_upload,
        choose_date
    } = req.body;

    
    var formattedDate = choose_date.split("-").reverse().join("-");
    const newUser = new UserInfo({
        email,
        mobile_no,
        enrollment_no,
        name_of_learner,
        programme_code,
        study_centre_code,
        course_code,
        file_upload,
        choose_date: formattedDate // Assign the formatted date to choose_date field
    });
    console.log("error se pahle",file_upload)
    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        console.log("error time",file_upload)
        res.status(409).json({message: error.message})

    }
}
