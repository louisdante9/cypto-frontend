import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogin } from '../../../actions';


function AdminLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors]);
    const onClick = (event) => {
        event.preventDefault();
        let userObj = { email, password };
        props.adminLogin(userObj, props.history)
    }
    return (
        <div className="user-ath-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8  text-center">
                        <div className="user-ath-logo">
                            <Link to="/">
                                <img src="images/logo-sm.png" srcSet="images/logo-sm2x.png 2x" alt="icon" />
                            </Link>
                        </div>
                        <div className="user-ath-box">
                            <h4>Login as Admin</h4>
                            <form className="user-ath-form">
                                {/* <!-- error shown here--> */}
                                {Object.keys(errors).length !== 0 && (<div className="note note-lg note-no-icon note-danger">
                                    <p>{errors.email}</p>
                                    <p> {errors.password}</p>
                                    <p> {errors.error}</p>
                                </div>)}
                                {/* <!-- end of error--> */}
                                <div className="input-item">
                                    <input type="text" placeholder="Your Email" className="input-bordered" name="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="password" placeholder="Password" className="input-bordered" name="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="gaps"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-primary" onClick={onClick}>Log in</button>
                                </div>
                            </form>
                        </div>
                        <div className="gaps-2x"></div>
                        <div className="form-note">
                            create Admin Account? <Link to="/createAdmin">Sign Up</Link>
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
export default connect(mapStateToProps, { adminLogin })(withRouter(AdminLogin));
