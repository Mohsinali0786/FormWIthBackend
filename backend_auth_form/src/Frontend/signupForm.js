import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


function SignupForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let data = {
        name,
        email,
        password,
    }
    const signup = () => {
        console.log('signup running')
        axios.post('http://localhost:4000/api/users', data)
            .then((res) => {
                console.log(res, "=res=")
                alert('sign up successfully')
            })
            .catch((error) => {
                console.log(error, "=error=")
            })



    }
    return (
        <div>
            <h3>SignUp Form</h3>
            <form>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td><input name='name' value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input name='email' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input name='password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <Button onClick={() => { signup() }}>SignUp</Button>
                </table>
            </form>
        </div>
    )
}

export default SignupForm