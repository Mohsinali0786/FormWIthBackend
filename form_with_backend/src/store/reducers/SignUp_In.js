
const initialState = {

    Users: [

    ],
    Company: [],
    LoginUser: {},
    IsLoggedIn: null,
    Attendance: []

}
const AllUsers = (state = initialState, action) => {
    switch (action.type) {

        case "REGISTERCOMPANY":

            return {
                ...state,
                Company: [...state.Company, action.payload],

            }
        case "LOGININ":
            console.log('action.payload', action.payload)
            return {
                ...state,
                LoginUser: action.payload,
                IsLoggedIn: true

            }

        default: return state

    }
}

export default AllUsers

