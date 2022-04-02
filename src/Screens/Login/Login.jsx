import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'
function Login() {
    return (
        <div className='login-outer'>
            <form>
                <h3>Login</h3>
                <p>Login with register phone number</p>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Number" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send OTP</button>
                <p className="forgot-password text-right">
                    <NavLink
                        className="nav-link "
                        activeClassName="active"
                        aria-current="page"
                        to="/createaccount"
                    >Sign-in
                    </NavLink>
                    
                </p>
            </form>
            <div>
                <NavLink
                    className="nav-link "
                    activeClassName="active"
                    aria-current="page"
                    to="/sellersignin"
                >Sign-in as seller
                </NavLink>
            </div>
        </div>
    )
}

export default Login