import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import btcValue from 'btc-value';
import { connect } from 'react-redux';
import { logout } from '../../actions';

function Header({ toggleClass, active, logOut, user, btc, invst }) {

  // const [btc, setBtc] = useState('');
  // const [inv, setINv] = useState('100')
  const rand = (n) => {
    let r = Math.random().toString(36).substring(n);
    return r.toUpperCase()
  }

  // useEffect(() => {
  //   btcValue.setApiKey('05aa5bf4-2aae-47f7-8d42-97b1dfe1a230');
  //   btcValue({ isDecimal: true })
  //     .then((value) => {
  //       const currentInvestment = parseFloat(inv / value)
  //       setBtc(currentInvestment.toFixed(4))
  //     });
  // }, []);

  return (

    <div className="topbar">
      <div className="topbar-md d-lg-none">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <a href="#" onClick={toggleClass} className={`toggle-nav ${active && 'active'}`}>
              <div className="toggle-icon">
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
              </div>
            </a>

            <div className="site-logo">
              <a href="#" className="site-brand">
                <img src="images/logo.png" alt="logo" srcSet="images/logo2x.png 2x" />
              </a>
            </div>

            <div className="dropdown topbar-action-item topbar-action-user">
              <a href="#" data-toggle="dropdown"> <img className="icon" src="images/user-thumb-sm.png" alt="thumb" /> </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="user-dropdown">
                  <div className="user-dropdown-head">
                    <h6 className="user-dropdown-name">{`${user.firstname} ${user.lastname}`} <span>({`${rand(4)}`})</span></h6>
                    <span className="user-dropdown-email">{`${user.email}`}</span>
                  </div>
                  <div className="user-dropdown-balance">
                    <h6>CYX BALANCE</h6>
                    <h3>100 IC0X</h3>
                    <ul>
                      <li>{`${btc}`} BTC</li>
                      <li>{`${invst}`} USD (INVESTMENT)</li>
                    </ul>
                  </div>
                  <div className="gaps-1x"></div>
                  <ul className="user-dropdown-links">
                    <li><a href="account.html"><i className="ti ti-id-badge"></i>My Profile</a></li>
                    <li><a href="activity.html"><i className="ti ti-eye"></i>Activity</a></li>
                  </ul>
                  <ul className="user-dropdown-links">
                    <li><div onClick={logOut}><i className="ti ti-power-off"></i>Logout</div></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="topbar-lg d-none d-lg-block">
            <div className="site-logo">
              <Link to="/" className="site-brand">
                <img src="images/logo.png" alt="logo" srcSet="images/logo2x.png 2x" />
              </Link>
            </div>
          </div>

          <div className="topbar-action d-none d-lg-block">
            <ul className="topbar-action-list">
              <li className="topbar-action-item topbar-action-link">
                <Link to="/"><em className="ti ti-home"></em> Go to main site</Link>
              </li>

              <li className="dropdown topbar-action-item topbar-action-user">
                <a href="#" data-toggle="dropdown"> <img className="icon" src="images/user-thumb-sm.png" alt="thumb" /> </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-dropdown">
                    <div className="user-dropdown-head">
                      <h6 className="user-dropdown-name">{`${user.firstname} ${user.lastname}`} <span>({`${rand(4)}`})</span></h6>
                      <span className="user-dropdown-email">{`${user.email}`}</span>
                    </div>
                    <div className="user-dropdown-balance">
                      <h6>CYX BALANCE</h6>
                      <h3>100 IC0X</h3>
                      <ul>
                        <li>{`${btc}`} BTC</li>
                        <li>{`${invst}`} USD (INVESTMENT)</li>
                      </ul>
                    </div>
                    <div className="gaps-1x"></div>
                    <ul className="user-dropdown-links">
                      <li><a href="account.html"><i className="ti ti-id-badge"></i>My Profile</a></li>
                      <li><a href="activity.html"><i className="ti ti-eye"></i>Activity</a></li>
                    </ul>
                    <ul className="user-dropdown-links">
                      <li><div onClick={logOut}><i className="ti ti-power-off"></i>Logout</div></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect(null, { logout })(withRouter(Header))

