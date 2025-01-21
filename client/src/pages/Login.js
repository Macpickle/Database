import '../stylesheets/index.css';
import '../stylesheets/login.css';

import { useNavigate } from 'react-router-dom';
import database from '../database/database';

// root component for Login
function Login() {
    const navigate = useNavigate(); // create navigate object for redirects    

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

    return (
        <section className="login-section">
            {/*TEMP DELETE FOR PROD*/}
            <div className = "position-absolute top-0 start-0">
                <p>
                    username: macpickle <br/>
                    password: macpickle <br/>
                    (or make your own in database.js)
                </p>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '25rem', height: '60dvh' }}>
                        <div className="card-body">
                            <div className="card-title text-center">
                                <img className="card-img-top mb-3" src="..." alt="LOGO" />
                                <h3>Welcome</h3>
                            </div>
                            <div className="error" style={{ display: 'none' }}>
                                <p>Invalid username or password</p>
                            </div>
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
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                                <p><a href="/forgot-password" className="float-end">Forgot password?</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;