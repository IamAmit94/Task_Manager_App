// const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')

// const userSchema = new mongoose.Schema({// creating the userSchema and passing the content of the user model to it
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a postive number')
//             }
//         }
//     }
// })
// // to use the method to setup the middleware up in our case we will be saving the user before the event, And we will be passing the 2 arguments 1st is save and the 2nd is  the function to run, We have used the simple function here becasue Arrow function do not help us to bind the data, We will be using the Asyn wait over here

// // The purpose of passing the next is to save the user before it is create
// userSchema.pre('save', async function (next) {
//     const user = this

//     if (user.isModified('password')) {//this will be true if the user is CREATED or the user is UPDATED (to hash the password we have used the mofified funx)
//         user.password = await bcrypt.hash(user.password, 8)// to hash the password we have used the user.pswrd and 8 is the number of rounds we have passed to it
//     }

//     next()
// })

// const User = mongoose.model('User', userSchema)// once the schema above is created then we need to pass the userSchema as the 2nd argument in the user

// module.exports = User



const book = {
    title: "anc",
    author: "asf"
}

console.log(book.title)

const ab = JSON.stringify(book)

console.log(ab)