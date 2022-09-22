const mongoose = require("mongoose");
const CompanySignupTable = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    CompanyName: {
        type: String,
        required: true,
    },
    ContactNo: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        required: true,
    },
    is_admin: {
        type: Boolean,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    userRole: {
        type: String,
        required: false,
    },
    // type: 'company',
    // userRole: 'admin',

})
let CompanySignupTableData = mongoose.model("CompanySignupTable", CompanySignupTable);

module.exports = CompanySignupTableData;
