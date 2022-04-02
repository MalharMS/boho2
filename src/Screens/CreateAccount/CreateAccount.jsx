import React from 'react'
import { NavLink } from 'react-router-dom'
import './createaccount.css'
function CreateAccount() {
    return (
        <div className='create-account-outer'>
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Number" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input type="text" className="form-control" placeholder="Role" />
                </div>
                <div className="form-group">
                    <label>Looking for</label>
                    <input type="text" className="form-control" placeholder="Looking for" />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" className="form-control" placeholder="Company" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already have an account
                    <NavLink
                        className="nav-link "
                        activeClassName="active"
                        aria-current="page"
                        to="/login"
                    >Login?
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

export default CreateAccount