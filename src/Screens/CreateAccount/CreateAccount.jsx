import React from 'react'
import { NavLink } from 'react-router-dom'
import './createaccount.css'
function CreateAccount() {
    return (
        <div className='create-account-outer bg-gray-300 rounded-lg shadow-lg	'>
            <form>
                <h3 className=' text-4xl font-semibold font-sans'>Sign Up</h3>
                <div className="flex flex-col">
                    <label className=' text-left '>First name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="flex flex-col my-2">
                    <label className=' text-left '>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Number" />
                </div>
                <div className="flex flex-col my-2">
                    <label className=' text-left '>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="flex flex-col my-2">
                    <label className=' text-left '>Role</label>
                    <input type="text" className="form-control" placeholder="Role" />
                </div>
                {/* <div className="form-group">
                    <label>Looking for</label>
                    <input type="text" className="form-control" placeholder="Looking for" />
                </div> */}
                <div className="flex flex-col my-2">
                    <label className=' text-left '>Company</label>
                    <input type="text" className="form-control" placeholder="Company" />
                </div>
                <button type="submit" className="w-20 h-12 rounded-md font-bold font-sans mt-3 bg-sky-400 text-white">Sign Up</button>
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
                <div>
                    <NavLink
                        className="nav-link "
                        activeClassName="active"
                        aria-current="page"
                        to="/sellersignin"
                    >Sign-in as seller
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount