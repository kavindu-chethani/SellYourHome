const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const homeSchema = new mongoose.Schema(
    {
        home_Id:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        zip_code:{
            type: String,
            required: true,
        },
        no_of_rooms:{
            type: String,
            required: true,
        },
        estimate_price:{
            type: String,
            required: true,
        },

    }
);
module.exports = mongoose.model('Home',homeSchema);



