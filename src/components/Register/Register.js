import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.scss';
import axios from "axios";

function Register(props) {


    useEffect(() => {
        // axios.get('http://localhost:8080/api/test')
        //     .then(data => {
        //         console.log('>>>>>>> Data API: ',data)
        //     })
        //     .catch(err => { console.log('Error ApI: ', err) })
        
})


    const isValidInpust = (userData) => {
        setObjCheckInput(defaultValidInput);
        if (!userData.email) {
            setObjCheckInput({...defaultValidInput,isValidEmail:false});
            toast.error('Email roongx')
            return false
        }
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(userData.email)) {
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            toast.error('Email khong dung dinh dang')
            return false
        }
        if (!userData.username) {
            toast.error('EserName khong duoc rong')
            return false
        }
        return true
    }
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRe_password] = useState("");

    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidRePassword: true,
}
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput)

    const handleRegister = () => {
        let userData = { email, phone, username, password };
        // toast.error('xkz mcx')
       let check = isValidInpust(userData);
        // if (check) {
            axios.post('http://localhost:8080/api/v1/register', {
                email,username,phone,password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
// }
    }

    return (
        <div className="register">
            <div className="container mt-5">
                <div className="row col-6">
            {/* <form method="post"> */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email"
                            className={objCheckInput.isValidEmail ? 'form-control' :'form-control is-invalid'}
                            name="email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}

                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">UserName</label>
                        <input type="email"
                            className="form-control" name="username"
                    value={username} onChange={(e)=>{setUserName(e.target.value)}}

                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="email"
                            className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'}
                            name="phone"
                    value={phone} onChange={(e)=>{setPhone(e.target.value)}}

                    />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password"
                            className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Re Password</label>
                        <input type="password" name="re-password"
                            className={objCheckInput.isValidRePassword ? 'form-control' : 'form-control is-invalid'} 
                                value={re_password} onChange={(e) => { setRe_password(e.target.value) }}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={()=>handleRegister()} className="btn btn-primary">Submit</button>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}

export default Register;