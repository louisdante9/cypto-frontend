import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

function AdminHeader({ toggleClass, active, logOut, user }) {
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
                <img src="/images/logo.png" alt="logo" srcSet="/images/logo2x.png 2x" />
              </a>
            </div>

            <div className="dropdown topbar-action-item topbar-action-user">
              <a href="#" data-toggle="dropdown"> <img className="icon" src={user.avatar} alt="thumb" /> </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="user-dropdown">
                  <div className="user-dropdown-head">
                    <span className="user-dropdown-email">{`${user.email}`}</span>
                  </div>
              
                  <div className="gaps-1x"></div>
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
                <img src="/images/logo.png" alt="logo" srcSet="/images/logo2x.png 2x" />
              </Link>
            </div>
          </div>

          <div className="topbar-action d-none d-lg-block">
            <ul className="topbar-action-list">
              <li className="topbar-action-item topbar-action-link">
                <Link to="/"><em className="ti ti-home"></em> Go to main site</Link>
              </li>

              <li className="dropdown topbar-action-item topbar-action-user">
                <a href="#" data-toggle="dropdown"> <img className="icon" src={user.avatar} alt="thumb" /> </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-dropdown">
                    <div className="user-dropdown-head">
                      <span className="user-dropdown-email">{`${user.email}`}</span>
                    </div>
                  
                    <div className="gaps-1x"></div>
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
export default connect(null, { logout })(withRouter(AdminHeader))

