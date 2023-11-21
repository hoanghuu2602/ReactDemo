import React from 'react';
import './Login.scss';
import axios from 'axios';
const Login = (props) => {

    axios.get('http://localhost:8080/api/test')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-5">
                    One of two columns fghjm ik uy
                </div>
                <div className="col-5">
                    <div className="wraper-form">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" name='Email' placeholder='Email' ></input>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" name='Password' placeholder='Password'></input>
                            </div>
                            <div class="mb-3 form-check">
                                <a href='#' title='Quên mật khẩu'>Quên mật khẩu?</a>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary btn-submit">Đăng nhập</button>
                            </div>

                        </form>

                        <div class="mb-3 form-check">
                            <a href='#' className='Register btn btn-success' >Tạo tài khoản mới</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;