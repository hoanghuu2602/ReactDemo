import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { loginUser } from "../../../services/userService"

function Login(props) {
    const [valueLogin, setValueLogin] = useState("")
const [password,setPassword] = useState("")
    const history = useHistory();

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleLogin = async () => {
        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput,isValidValueLogin : false })
            toast.error('Bạn chưa nhập email hoặc số điện thoại')
            return;
}
        if (!password) {
            setObjValidInput({...defaultObjValidInput, isValidPassword : false})
            toast.error('Bạn chưa nhập mật khẩu')
            return;
        }
        await loginUser(valueLogin,password)
        
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1>Trang Login</h1>
                        {/* <form> */}
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email/Phone</label>
                                <input
                                value={valueLogin}
                                rel=""
                                    onChange={(event) => setValueLogin(event.target.value)}
                                type="text"
                                className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                                // className="form-control"
                                name="valueLogin"
                                placeholder="Nhap email hoac phone"
                                />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Password</label>
                                <input
                                    value={password}
                                    onChange={(event)=>setPassword(event.target.value)}
                                type="password"
                                className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}

                                name="password"
                                />
                                <div id="emailHelp" className="form-text"></div>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button
                                onClick={()=>handleLogin()}
                                type="submit" className="btn btn-primary">Login</button>
                        {/* </form> */}
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

           

        </div>
        
    );
}

export default Login;