import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email : {
        type: String,
        required : true
    },
    mobile_no : {
        type : Number,
        required : true
    },
    enrollment_no : {
        type : Number,
        required : true

    },
    name_of_learner : {
        type : String,
        required : true
    },
    programme_code: {
        type: String,
        required : true
    },
    study_centre_code:{
        type: Number,
        required: true
    },
    course_code: {
        type: String,
        required: true
    },
    file_upload:{
        type: String,
        required : true
    },
    choose_date:{
        type: Date,
        required: true
    }
})


const userInfo = mongoose.model('userInfo', userSchema);
export default userInfo;