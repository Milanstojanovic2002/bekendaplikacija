const mongoose = require("mongoose");
const responseSchema = mongoose.Schema({
    gender: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    comm: String,
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
