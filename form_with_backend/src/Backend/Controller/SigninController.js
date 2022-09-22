const CompanySignupTableData = require("../Model/signupModel")

const authUser = async (req, res) => {
    console.log('Body===>', req.body)
    const { email, password } = req.body
    // let email = body.Email
    const IsUserExist = await CompanySignupTableData.findOne({ email })
    console.log('Is User Exist', IsUserExist)
    if (IsUserExist && IsUserExist.Password === password) {
        // res.json({
        //     id: IsUserExist.id,
        //     Email: IsUserExist.Email,
        //     Password: IsUserExist.Password,
        //     CompanyName: IsUserExist.CompanyName,
        // })
    }
    else {
        res.status(400)
        throw new Error('Invalid Email and Password')
    }
}

module.exports = {
    authUser
}