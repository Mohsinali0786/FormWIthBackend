export const Sign_Up = (data) => async (dispatch, getState) => {
    console.log("SignU Data", data)
    dispatch({
        type: "REGISTER",
        payload: data
    })
    // SignupDataObj.save().
    //     then(() => {
    //         return res.send({
    //             status: 201,
    //             sucess: true,
    //             body,
    //             msg: " Your Registration Successfully",
    //         })
    //     }).catch((e) => {
    //         console.log('error', e)
    //         return res.send({
    //             sucess: false,
    //             error: e,
    //             msg: "something went wrong",
    //         })
    //     })

    // localStorage.setItem('Users', JSON.stringify(getState()))
}
export const CompanySign_Up = (data) => async (dispatch, getState) => {
    console.log("SignU Data in action", data)
    dispatch({
        type: "REGISTERCOMPANY",
        payload: data
    })
    // localStorage.setItem('Users', JSON.stringify(getState()))
}
export const Sign_In = (LoginInfo) => async (dispatch) => {
    console.log('SignIn Running')
    dispatch({
        type: 'LOGININ',
        payload: LoginInfo,
    })
}

export const signOut = () => async (dispatch) => {
    console.log('Run')
    dispatch({
        type: 'LOGOUT',
    })
}



