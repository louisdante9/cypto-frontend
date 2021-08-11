import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions';


function Signup(props) {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirm, setConfirmPassword] = React.useState("");
    const [errors, setErrors] = useState({});
    const [planType, setPlanType] = React.useState('planA');
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        setErrors(props.errors)
        console.log(props.errors)
    }, [props.errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname,
            lastname,
            username,
            email,
            password,
            password_confirm,
            planType,
            role: 'user'
        }
        props.registerUser(user, props.history);
    }
    const err = Object.keys(errors).length !== 0 ? 'error': ''
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
                            <h4>Creat New Account</h4>
                            <form action="signup-success.html" className="user-ath-form">
                                {Object.keys(errors).length !== 0 && (<div className="note note-lg note-no-icon note-danger">
                                <p>A Error occurs with your form submission. Please review and try again</p>
                                
                                </div>)}
                                <div className="input-item">
                                    <input type="text" placeholder="First Name" className={`input-bordered ${err}`} onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="text" placeholder="Last Name" className={`input-bordered ${err}`} onChange={(e) => setLastname(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="text" placeholder="Username" className={`input-bordered ${err}`} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type="text" placeholder="Your Email" className={`input-bordered ${err}`} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <input type={showPass ? 'text' : 'password'} placeholder="Password" className={`input-bordered ${err}`} onChange={(e) => setPassword(e.target.value)} />
                                    <i className={showPass ? 'far fa-eye-slash' : 'far fa-eye'} onClick={()=> setShowPass(!showPass)}></i> 
                                </div>
                                <div className="input-item">
                                    <input type="password" placeholder="Confirm Password" className={`input-bordered ${err}`} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="input-item">
                                    <select className="country-select input-bordered " name="Nationality" id="Nationality" onChange={(e) => setPlanType(e.target.value)}>
                                        <option value="planA">Plan A</option>
                                        <option value="planB">Plan B</option>
                                        <option value="planC">Plan C</option>
                                        <option value="planD">Plan D</option>
                                    </select>
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
                            Already a member? <Link to="/signin">Login</Link>
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

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
