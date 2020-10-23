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
                <h6 className="user-name" style={{color: "green"}}>{user.role.toUpperCase()}</h6>
            </div>

            <ul className="user-icon-nav">
                <li><Link to="/users"><em className="ti ti-dashboard"></em>users</Link></li>
                <li><Link to="/admin"><em className="ti ti-control-shuffle"></em>Transactions</Link></li>
            </ul>
            <div className="user-sidebar-sap"></div>
            <ul className="user-nav">
                <li><a href="how-to.html">How to buy?</a></li>
                <li><a href="faq.html">Faqs</a></li>
                <li>Contact Support<span>info@email.com</span></li>
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

