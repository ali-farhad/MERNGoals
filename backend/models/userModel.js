const moongose = require('mongoose')

const userSchema = moongose.Schema({

    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an Email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    }
}, {
    timestamps: true
})

module.exports = moongose.model("User", userSchema)