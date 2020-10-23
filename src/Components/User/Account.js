import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import btcValue from 'btc-value';
import { logout, fetchAUserDetails } from '../../actions';
import Header from '../Commons/Header'
import SideNav from '../Commons/SideNav'

function Account({ logout, history, user, fetchAUserDetails, getUser }) {
  const [active, setActive] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [planType, setPlanType] = useState('');
  const [accountBal, setAccountBal] = useState('');
  const [token, setToken] = useState('')


  useEffect(() => {
    async function fetchData() {
      fetchAUserDetails(user.id)
    }
    fetchData();
  }, [user,fetchAUserDetails]);

  useEffect(() => {
    setFirstName(getUser.firstname)
    setLastName(getUser.lastname)
    setUsername(getUser.username)
    setEmail(getUser.email)
    setPlanType(getUser.planType)
    setAccountBal(getUser.accountBal)
    setToken(getUser.uuidv4)
  }, [getUser]);

  const logOut = (event) => {
    event.preventDefault();
    logout()
    history.push('/signin');
  }

  const toggleClass = () => {
    setActive(!active)
  }

  return (
    <Fragment>
      <div className="user-dashboard">
        <Header toggleClass={toggleClass} active={active} logOut={logOut} user={getUser}  />
        <div className="user-wraper">
          <div className="container">
            <div className="d-flex">
              <SideNav active={active} user={getUser}/>
              <div className="user-content">
                <div className="user-panel">
                  <h2 className="user-panel-title">Account Information</h2>
                  <div className="alert-box alert-primary">
                    <div className="alert-txt"><em className="ti ti-layout-tab" />Your Account</div>
                  </div>{/* .alert-box */}
                  <ul className="nav nav-tabs nav-tabs-line" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#personal-data">Personal Data</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#wallet-address">Wallet Info</a>
                    </li>
                  </ul>{/* .nav-tabs-line */}
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="personal-data">
                      <form action="#">
                        <div className="input-item input-with-label">
                          <label htmlFor="full-name" className="input-item-label">Firstname Name</label>
                          <input className="input-bordered" type="text" id="firstname" name="firstname" defaultValue={firstname} disabled/>
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="sur-name" className="input-item-label">Surname</label>
                          <input className="input-bordered" type="text" id="lastname" name="lastname" defaultValue={lastname} disabled/>
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="username" className="input-item-label">Username</label>
                          <input className="input-bordered" type="text" id="username" name="username" disabled defaultValue={username} />
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="email-address" className="input-item-label">Email Address</label>
                          <input className="input-bordered" type="text" id="email" name="email" disabled defaultValue={email} />
                        </div>{/* .input-item */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="date-of-birth" className="input-item-label">Plan Type</label>
                              <input className="input-bordered date-picker" type="text" id="planType" name="planType" disabled defaultValue={planType} />
                            </div>{/* .input-item */}
                          </div>{/* .col */}

                        </div>{/* .row */}
                        <div className="gaps-1x" />{/* 10px gap */}
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* <button className="btn btn-primary">Update</button> */}
                          <div className="gaps-2x d-sm-none" />
                          <span className="color-success"><em className="ti ti-check-box" /> Verified</span>
                        </div>
                      </form>{/* form */}
                    </div>{/* .tab-pane */}
                    <div className="tab-pane fade" id="wallet-address">
                      <p>In order to fund your COX wallet, please contact your account officer. You will receive COX tokens once payment is confirmed.</p>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="date-of-birth" className="input-item-label">Account Balance</label>
                              <input className="input-bordered date-picker" type="text" id="accountBal" name="accountBal" disabled defaultValue={accountBal} />
                            </div>{/* .input-item */}
                          </div>{/* .col */}
                        </div>{/* .row */}
                        <div className="input-item input-with-label">
                          <label htmlFor="token-address" className="input-item-label">Your token number:</label>
                          <input className="input-bordered" type="text" id="token-address" name="amount" defaultValue={token} disabled/>
                          <span className="input-note">Note: To add funds to your wallet please contact your account officer.</span>
                        </div>{/* .input-item */}
                        <div className="gaps-2x" />
                        <div className="note note-plane note-danger">
                          <em className="fas fa-info-circle" />
                          <p>An email will be sent to you once payment is confirmed and your wallet would be updated. If you encounter any difficulties please do contact us.</p>
                        </div>
                        <div className="gaps-3x" />
                        <div className="gaps-1x" />{/* 10px gap */}
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* <button className="btn btn-primary">Update</button> */}
                          <div className="gaps-2x d-sm-none" />
                          <span className="color-success"><em className="ti ti-check-box" /> Verified</span>
                        </div>
                      </form>{/* form */}
                    </div>{/* .tab-pane */}

                  </div>{/* .tab-content */}
                </div>{/* .user-panel */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <span className="footer-copyright">Copyright 2018, <a href="#">Cryptoxchangeco</a>.  All Rights Reserved.</span>
              </div>
              <div className="col-md-5 text-md-right">
                <ul className="footer-links">
                  <li><a href="policy.html">Privacy Policy</a></li>
                  <li><a href="policy.html">Terms of Sales</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = state => ({
  user: state.setCurrentUser.user,
  getUser: state.getUser
});
export default connect(mapStateToProps, { logout, fetchAUserDetails })(withRouter(Account))
