import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAdmin } from '../../../actions';


function AdminSignup(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirm, setConfirmPassword] = React.useState("");
    const [errors, setErrors] = useState({});


    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            password_confirm,
        }
        props.registerAdmin(user, props.history);
    }
    return (
        <div className="user-ath-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 text-center">
                        <div className="user-ath-logo">
                            <a href="#">
                                <img src="images/logo-sm.png" srcSet="images/logo-sm2x.png 2x" alt="icon" />
                            </a>
                        </div>
                        <div className="user-ath-box">
                            <h4>Creat New Admin Account</h4>
                            <form action="signup-success.html" className="user-ath-form">
                                {Object.keys(errors).length !== 0 && (<div className="note note-lg note-no-icon note-danger">
                                <p>{errors.email}</p>
                                <p> {errors.password}</p>
                                <p>{errors.password_confirm}</p>
                                <p>{errors.error}</p>
                                </div>)}
                               
                                <div className="input-item">
                                    <input type="text" placeholder="Username" className="input-bordered" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="password" placeholder="Password" className="input-bordered" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="password" placeholder="Repeat Password" className="input-bordered" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                
                                <div className="input-item text-left">

                                </div>
                                <div className="gaps"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="gaps-2x"></div>
                        <div className="form-note">
                            login As Admin? <Link to="/loginAdmin">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { registerAdmin })(withRouter(AdminSignup));
