import '../stylesheets/index.css';
import '../stylesheets/login.css';

import { useNavigate } from 'react-router-dom';

// root component for Register
function Register() {
    const navigate = useNavigate(); // create navigate object for redirects    

    // get username and password from form data
    const registerUser = (event) => {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(username, email, password);
        // check if user can be created with these credentials
        // (eg. check if user and email is unique)
        // if valid, login page
        // else raise errors
        
        navigate('/login', {state: {username: username}});
    }

    // reset display of error message
    const resetError = () => {
        document.querySelector(".error").style.display = "none";
    }

    return (
        <section className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="text-center">
                                <img className="mb-3" src="..." alt="LOGO" />
                                <h3>Signup</h3>
                            </div>
                            <div className="error" style={{ display: 'none' }}>
                                <p>Invalid username or password</p>
                            </div>
                            <div className="mt-5 mb-5">
                                <form onSubmit={registerUser}>
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
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
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
                                </form>
                                <div className="mt-1 text-center">
                                    <p>Already have an account? <a href="/login">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;