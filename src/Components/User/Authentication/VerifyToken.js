import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {verifyUser} from '../../../actions';



function VerifyToken(props) {
    const [token, setToken] = useState("");
    const [errors, setErrors] = useState({});


    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.verifyUser({activationCode: token}, props.history);
    }

    return (
        <div className="user-ath-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8  text-center">
                        <div className="user-ath-logo">
                            <a href="/">
                                <img src="images/logo-sm.png" srcSet="images/logo-sm2x.png 2x" alt="icon" />
                            </a>
                        </div>
                        <div className="user-ath-box">
                            <h4>Enter your token</h4>
                            <form className="user-ath-form">
                            {Object.keys(errors).length !== 0 && (<div className="note note-lg note-no-icon note-danger">
                                <p>{errors.activationCode || errors.message}</p>
                                </div>)}
                                <div className="input-item">
                                    <input type="text" placeholder="Your Token" className="input-bordered" name="token" onChange={(e) => setToken(e.target.value)}/>
                                </div>
                               
                                <div className="gaps"></div>
                                <div>
                                    <button className="btn btn-primary col-md-12" onClick={handleSubmit}>Verify Token</button>
                                </div>
                            </form>
                        </div>
                        <div className="gaps-2x"></div>
                        <div className="form-note">
                            Alread a member? <Link to="/signin">Sign In</Link>
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
export default connect(mapStateToProps, { verifyUser })(withRouter(VerifyToken));
