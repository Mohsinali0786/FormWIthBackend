import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


function SigninForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let data = {
        email,
        password,
    }
    const signin = () => {
        console.log('signup running')
        axios.post('http://localhost:4000/api/login', data)
            .then((res) => {
                console.log(res, "=res=")
                alert('signin Successfully')
            })
            .catch((error) => {
                console.log(error, "=error=")
                alert('Wrong Email or Password')
            })



    }
    return (
        <div>
            <h3>SignIn Form</h3>
            <form>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td><input name='email' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input name='password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <Button onClick={() => { signin() }}>Signin</Button>
                </table>
            </form>
        </div>
    )
}

export default SigninForm