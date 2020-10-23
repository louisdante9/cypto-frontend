import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

function SideNav({ active }) {
    return (
        <div className={`user-sidebar ${active ? 'user-sidebar-mobile active' : ''}`}>
            <div className="user-sidebar-overlay"></div>
            <ul className="user-icon-nav">
                <li><a href="#"><em className="ti ti-dashboard"></em>Dashboard</a></li>
                <li><a href="kyc.html"><em className="ti ti-files"></em>KYC Application</a></li>
                <li><a href="tokens.html"><em className="ti ti-pie-chart"></em>Contributions</a></li>
                <li><a href="transactions.html"><em className="ti ti-control-shuffle"></em>Transactions</a></li>
                <li><a href="referrals.html"><em className="ti ti-infinite"></em>Referral</a></li>
                <li><a href="account.html"><em className="ti ti-user"></em>Account</a></li>
                <li><a href="security.html"><em className="ti ti-lock"></em>Security</a></li>
            </ul>
            <div className="user-sidebar-sap"></div>
            <ul className="user-nav">
                <li><a href="how-to.html">How to buy?</a></li>
                <li><a href="faq.html">Faqs</a></li>
                <li><a href="#">Whitepaper</a></li>
                <li>Contact Support<span>info@icocrypto.com</span></li>
            </ul>
            <div className="d-lg-none">
                <div className="user-sidebar-sap"></div>
                <div className="gaps-1x"></div>
                <ul className="topbar-action-list">
                    <li className="topbar-action-item topbar-action-link">
                        <Link to="/"><em className="ti ti-home"></em> Go to main site</Link>
                    </li>
                    <li className="dropup topbar-action-item topbar-action-language">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true"> EN <em className="ti ti-angle-up"></em> </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">FR</a></li>
                            <li><a href="#">JY</a></li>
                            <li><a href="#">CH</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default connect(null, { logout })(withRouter(SideNav))

