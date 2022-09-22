const CompanySignupTableData = require("../Model/signupModel")

const companySignupController = async (req, res) => {
    try {
        // const { body } = req
        // let email = body.Email
        const { CompanyName, ContactNo, Address, Email, Password } = req.body
        const IsUserExist = await CompanySignupTableData.findOne({ Email })
        console.log('NextIsUserexist====>', IsUserExist)
        let SignupDataObj = new CompanySignupTableData({
            id: "9999",
            // CompanyName: body.CompanyName,
            CompanyName,
            ContactNo,
            Address,
            Email,
            type: 'Company',
            userRole: 'ADMIN',
            Password,
            is_deleted: false,
            is_admin: false,
        })
        if (IsUserExist) {
            res.status(400);
            throw new Error('User Already Exist')
        }
        else {

            SignupDataObj.save().
                then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        body,
                        msg: " Your Registration Successfully",
                    })
                }).catch((e) => {
                    console.log('error', e)
                    return res.send({
                        sucess: false,
                        error: e,
                        msg: "something went wrong",
                    })
                })
        }

    }
    catch (err) {
        console.log(err)
        return res.send({
            status: 500,
            sucess: false,
            msg: "server err",
        })

    }
}

module.exports = {
    companySignupController
}