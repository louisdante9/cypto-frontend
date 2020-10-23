import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import btcValue from 'btc-value';
import { logout, fetchAUserDetails, updateUser } from '../../actions';
import AdminHeader from '../Commons/AdminHeader'
import AdminSideNav from '../Commons/AdminSideNav'

function User({ logout, history, user, fetchAUserDetails, updateUser, getUser, match }) {
  const [active, setActive] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [planType, setPlanType] = useState('');
  const [accountBal, setAccountBal] = useState('');
  const [totalInvestment, setTotalInvestment] = useState('');
  const [earnedTotal, setEarnedTotal] = useState('');
  const [status, setstatus] = useState('');
  const [token, setToken] = useState('')


  useEffect(() => {
    async function fetchData() {
      fetchAUserDetails(match.params.id)
    }
    fetchData();
  }, [match, fetchAUserDetails]);

  useEffect(() => {
    setFirstName(getUser.firstname)
    setLastName(getUser.lastname)
    setUsername(getUser.username)
    setEmail(getUser.email)
    setPlanType(getUser.planType)
    setAccountBal(getUser.accountBal)
    setTotalInvestment(getUser.totalInvestment)
    setEarnedTotal(getUser.earnedTotal)
    setstatus(getUser.status)
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const userObj = {
      accountBal,
      totalInvestment,
      earnedTotal,
      planType,
    }
    updateUser(match.params.id, userObj, history)
  }
  return (
    <Fragment>
      <div className="user-dashboard">
        <AdminHeader toggleClass={toggleClass} active={active} logOut={logOut} user={user} />
        <div className="user-wraper">
          <div className="container">
            <div className="d-flex">
              <AdminSideNav active={active} user={user}/>
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
                          <input className="input-bordered" type="text" id="firstname" name="firstname" defaultValue={firstname} disabled />
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="sur-name" className="input-item-label">Surname</label>
                          <input className="input-bordered" type="text" id="lastname" name="lastname" defaultValue={lastname} disabled />
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="username" className="input-item-label">Username</label>
                          <input className="input-bordered" type="text" id="username" name="username" disabled defaultValue={username} />
                        </div>{/* .input-item */}
                        <div className="input-item input-with-label">
                          <label htmlFor="email-address" className="input-item-label">Email Address</label>
                          <input className="input-bordered" type="text" id="email" name="email" defaultValue={email} disabled />
                        </div>{/* .input-item */}
                        <div className="row">

                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="planType" className="input-item-label">Plan Type</label>
                              <select className="country-select input-bordered " name="Nationality" id="Nationality" value={planType} onChange={(e) => setPlanType(e.target.value)}>
                                <option value="planA">Plan A</option>
                                <option value="planB">Plan B</option>
                                <option value="planC">Plan C</option>
                                <option value="planD">Plan D</option>
                              </select>
                            </div>
                          </div>
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
                      <p>You can update the client's Information below.</p>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="accountBal" className="input-item-label">Account Balance</label>
                              <input className="input-bordered date-picker" type="number" id="accountBal" name="accountBal" defaultValue={accountBal} onChange={(e) => setAccountBal(e.target.value)} />
                            </div>{/* .input-item */}
                          </div>{/* .col */}
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="status" className="input-item-label">Status</label>
                              <input className="input-bordered date-picker" type="text" id="status" name="status" defaultValue={status} disabled />
                            </div>{/* .input-item */}
                          </div>{/* .col */}
                        </div>{/* .row */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="totalInvestment" className="input-item-label">BTC Investments</label>
                              <input className="input-bordered date-picker" type="number" id="totalInvestment" name="totalInvestment" defaultValue={totalInvestment} onChange={(e) => setTotalInvestment(e.target.value)} />
                            </div>{/* .input-item */}
                          </div>{/* .col */}
                          <div className="col-md-6">
                            <div className="input-item input-with-label">
                              <label htmlFor="earnedTotal" className="input-item-label">Earnings</label>
                              <input className="input-bordered date-picker" type="number" id="earnedTotal" name="earnedTotal" defaultValue={earnedTotal} onChange={(e) => setEarnedTotal(e.target.value)}/>
                            </div>{/* .input-item */}
                          </div>{/* .col */}
                        </div>{/* .row */}
                        <div className="input-item input-with-label">
                          <label htmlFor="token-address" className="input-item-label">Your token number:</label>
                          <input className="input-bordered" type="text" id="token-address" name="amount" defaultValue={token} disabled placeholder="eg: 1a6ce328-1aa4-4f07-b46d-91bbd8d0f885" />
                          <span className="input-note">Note: To add funds to client's wallet please enter digit.</span>
                        </div>{/* .input-item */}
                        <div className="gaps-2x" />
                        <div className="note note-plane note-danger">

                        </div>
                        <div className="gaps-3x" />
                        <div className="gaps-1x" />{/* 10px gap */}
                        <div className="d-sm-flex justify-content-between align-items-center">
                          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
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
export default connect(mapStateToProps, { logout, fetchAUserDetails, updateUser })(withRouter(User))
