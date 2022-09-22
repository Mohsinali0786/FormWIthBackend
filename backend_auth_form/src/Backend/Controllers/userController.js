const asyncHandler = require('express-async-handler')
const User = require('../Model/userModel')
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await User.findOne({ email })
    console.log('userExist', userExist)
    if (userExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }
    const myuser = await User.create({

        name,
        email,
        password,
    });
    // console.log('user======>', user)

    if (myuser) {
        res.status(201).json({
            _id: myuser._id,
            name: myuser.name,
            email: myuser.email,
            isAdmin: myuser.isAdmin,
        })
    }
    else {
        res.status(400)
        throw new Error('Error Occured')
    }
})
const authUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.findOne({ email })
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User or Password')
    }

})
module.exports = { registerUser, authUser }