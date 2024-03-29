import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

function SideNav({ active, user }) {
    return (
        <div className={`user-sidebar ${active ? 'user-sidebar-mobile active' : ''}`}>
            <div className="user-sidebar-overlay"></div>
            <div className="user-box d-none d-lg-block">
                <div className="user-image">
                    <img src={user.avatar} alt="thumb" />
                </div>
                <h6 className="user-name">{`${user.firstname} ${user.lastname}`}</h6>
                <div className="user-uid">Status: <span style={{color: "limegreen" }}>{user.status ? 'Approved' : 'Revolked'}</span></div>
            </div>

            <ul className="user-icon-nav">
                <li><Link to="/dashboard"><em className="ti ti-dashboard"></em>Dashboard</Link></li>
                <li><Link to="/minings"><em className="ti ti-pie-chart"></em>Mining Plans</Link></li>
                <li><Link to="/transactions"><em className="ti ti-control-shuffle"></em>Transactions</Link></li>
                {/* <li><a href="referrals.html"><em className="ti ti-infinite"></em>Referral</a></li> */}
                <li><Link to="/profile"><em className="ti ti-user"></em>Account</Link></li>
                {/* <li><a href="security.html"><em className="ti ti-lock"></em>Security</a></li> */}
            </ul>
            <div className="user-sidebar-sap"></div>
            <ul className="user-nav">
                <li><a href="how-to.html">How to buy?</a></li>
                <li><a href="faq.html">Faqs</a></li>
                <li>Contact Support<span>info@icocrypto.com</span></li>
            </ul>
            <div className="d-lg-none">
                <div className="user-sidebar-sap"></div>
                <div className="gaps-1x"></div>
                <ul className="topbar-action-list">
                    <li className="topbar-action-item topbar-action-link">
                        <Link to="/"><em className="ti ti-home"></em> Go to main site</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default connect(null, { logout })(withRouter(SideNav))

