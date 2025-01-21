import '../stylesheets/index.css';
import '../stylesheets/login.css';

import { useNavigate, useLocation } from 'react-router-dom';
import database from '../database/database';
import { useEffect } from 'react';

// root component for Login
function Login() {
    const navigate = useNavigate(); // create navigate object for redirects    
    const location = useLocation(); // object to recieve data from different pages, in this case, from register account page

    // get username and password from form data
    const loginUser = (event) => {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // make API call to server to verify user (not implemented)
        console.log(username, password);
        
        // for now, just check if user is in "database"
        const user = database.find(user => user.username === username);

        // error handling 
        if (!user) {
            document.querySelector(".error").style.display = "block";
            return;
        }

        // upon successful login, set token in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("role", user.role);
        navigate('/');
    }

    // reset display of error message
    const resetError = () => {
        document.querySelector(".error").style.display = "none";
    }
    
    useEffect(() => {
        if (location.state) {
            document.getElementById("username").value = location.state.username;
        }
        
    });


    return (
        <section className="login-section">
            {/*TEMP DELETE FOR PROD*/}
            <div className="position-absolute top-0 start-0">
                <p>
                    username: macpickle <br/>
                    password: macpickle <br/>
                    (or make your own in database.js)
                </p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="text-center">
                                <img className="mb-3" src="..." alt="LOGO" />
                                <h3>Welcome</h3>
                            </div>
                            <div className="error" style={{ display: 'none' }}>
                                <p>Invalid username or password</p>
                            </div>
                            <div className="mt-5 mb-5">
                                <p>Dont have an account? <a href="/register">Sign up</a></p>
                                <form onSubmit={loginUser}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Username"
                                            required
                                            autoComplete="on"
                                            onChange={resetError}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            required
                                            autoComplete="on"
                                            onChange={resetError}
                                        />
                                    </div>
                                    
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    <p><a href="/forgot-password" className="float-end">Forgot password?</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;