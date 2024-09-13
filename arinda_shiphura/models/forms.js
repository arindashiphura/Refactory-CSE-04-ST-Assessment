// models/produce.js

const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const formSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true
      },
      gender: {
        type: String,
        trim: true,
      },
      dob: {
        type: Date,
        trim: true
      },
      nationality: {
        type: String,
        trim: true
      },
      phoneNumber: {
        type: String,
        trim: true
      },
      emailAddress: {
        type: String,
        trim: true
      },
      poBox: {
        type: Number,
        default: '' // Optional field
      },
      emergencyPhone: {
        type: String,
        trim: true
      },
      passportNumber: {
        type: Number,
        trim: true
      },
      visaDocument: {
        type: String, // Store the filename or URL of the uploaded file
        trim: true
      },
      departureCity: {
        type: String,
        trim: true
      },
      destinationCity: {
        type: String,
        trim: true
      },
    });

module.exports = mongoose.model('Form', formSchema);
