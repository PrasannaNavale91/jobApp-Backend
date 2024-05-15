import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide job title"],
        minlength: [5, "Job title must be contain at least 3 characters!"],
        maxlenght: [50, "Job title cannot exceed 50 characters!"],
    },
    description:{
        type: String,
        required: [true, "Please provide job title"],
        minlength: [50, "Job description must be contain at least 350 characters!"],
        maxlenght: [150, "Job description cannot exceed 150 characters!"],
    },
    category:{
        type: String,
        required: [true, "Job category is required!"]
    },
    country:{
        type: String,
        required: [true, "Country is required!"]
    },
    city:{
        type: String,
        required: [true, "City is required!"]
    },
    location:{
        type: String,
        required: [true, "Please provide exact location"],
        minlength: [50, "Job location must contains at least 50 characters!"],
    },
    fixedSalary:{
        type: Number,
        minlength: [5, "Fixed salary must contain at least 5 digits!"],
        maxlenght: [8, "Fixed salary cannot exceed 8 digits!"],
    },
    salaryFrom:{
        type: Number,
        minlength: [5, "Salary from must contain at least 5 digits!"],
        maxlenght: [8, "Salary from cannot exceed 8 digits!"],
    },
    salaryTo:{
        type: Number,
        minlength: [5, "Salary to must contain at least 5 digits!"],
        maxlenght: [8, "Salary t0 cannot exceed 8 digits!"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
})

export const Job = mongoose.model("Job", jobSchema);