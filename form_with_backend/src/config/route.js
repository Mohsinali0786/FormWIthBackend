import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Screen/Home'
import Signin from '../Screen/Signin'
import SignUpForm from '../Screen/CompanySignUp'


// import {
//     SignInForm,
//     SignUpForm,
// } from './const'


// var Allpaths = [

//     { path: SignInForm, Component: MainPage },
//     { path: SignUpForm, Component: SignUpForm },


// ]

function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                {/* {
                        Allpaths.map((myroutes, index) => {
                            return (
                                <Route key={index} path={myroutes.path} element={<myroutes.Component />} />
                            )
                        })

                    } */}

                <Route exact path='/' element={<SignUpForm />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/home' element={<Home />} />

                {/* <Route path='/adminPage' element={<AdminPage />} />
                <Route path='/student' element={<Student />} />
                <Route path='/home' element={<Home />} />
                <Route path='/comapanysignup' element={<CompanySignUpForm />} />
                <Route path='/profile' element={<CompanyProfile />} />
                <Route path='/userprofile' element={<UserProfile />} /> */}





            </Routes>

        </BrowserRouter>


    )
}
export default AppRouter