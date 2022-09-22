import { useState } from "react"
import { Sign_In } from '../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const dispatch = useDispatch()

    let userinfo = {
        email,
        password
    }
    const mystate = useSelector((state) => state)
    const login = () => {

        // console.log('mystate====>', mystate)
        dispatch(Sign_In(userinfo))
        axios.post('http://localhost:4000/api/user/login', userinfo)
            .then((res) => {
                console.log(res, "=res login page=")
            })
            .catch((error) => {
                console.log(error, "=error=")
            })

        Navigate('/home')

    }
    return (
        <div>
            <h4>Sign in Form</h4>
            <form>
                <label>Email</label>
                <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button onClick={() => login()}>Login</button>
        </div>

    )
}
export default Signin