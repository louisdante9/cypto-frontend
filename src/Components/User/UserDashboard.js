import React, { Fragment, useState,useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import btcValue from 'btc-value';
import { logout } from '../../actions';
import Header from '../Commons/Header'
import SideNav from '../Commons/SideNav'

function UserDashboard({logout, history, user}) {
  const [active, setActive]=useState(false);
  const [btc, setBtc] = useState('');
  const [inv, setInv] = useState('100')
  const [pgrBar, setPgrBar] = useState('10%')
  const gains = 7000;
  useEffect(() => {
    btcValue.setApiKey('05aa5bf4-2aae-47f7-8d42-97b1dfe1a230');
    btcValue({ isDecimal: true })
      .then((value) => {
        const currentInvestment = parseFloat(inv / value)
        setBtc(currentInvestment.toFixed(4))
      });
  }, []);
  useEffect(() => {
    if (gains <= 0) {
      return 
    } else if (gains > 0 && gains < 5000) {
      setPgrBar('30%')
    } else if (gains > 5001 && gains < 50000) {
      setPgrBar('45%')
    } else if (gains > 50001 && gains < 100000) {
      setPgrBar('60%')
    } else if (gains > 100001 && gains < 500000) {
      setPgrBar('75%')
    }

  }, [gains]);
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
        <Header toggleClass={toggleClass} active={active} logOut={logOut} user={user} btc={btc} invst = {inv}/>/>
        <div className="user-wraper">
          <div className="container">
            <div className="d-flex">
              <SideNav active={active}/>
              
              <div className="user-content">
                <div className="user-panel">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tile-item tile-primary">
                        <div className="tile-bubbles"></div>
                        <h6 className="tile-info ">EARN UP TO 75% PROFIT ON
                          INVESTMENTS IN 30 DAYS</h6>
                        <h1 className="tile-title">IC0X WALLET BALANCE: $100</h1>
                        <ul className="tile-list-inline">
                          <li>{`${btc}`} BTC</li>
                          <li>{`${inv}`} USD</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tile-item tile-light">
                        <div className="tile-bubbles"></div>
                        <h6 className="tile-title">YOUR INVESTMENT</h6>
                        <ul className="tile-info-list">
                          <li><span>{`${btc}`}</span>BTC</li>
                          <li><span>~</span> = </li>
                          <li><span>{`${inv}`}</span>USD</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-card info-card-bordered">
                    <div className="row align-items-center">
                      <div className="col-sm-3">
                        <div className="info-card-image">
                          <img src="images/vector-a.png" alt="vector" />
                        </div>
                        <div className="gaps-2x d-md-none"></div>
                      </div>
                      <div className="col-sm-9">
                        <h4>Thank you for your interest towards to our Cryptoxchangeco Projects</h4>
                        <p>You can invest COX tokens in <a href="#">Mining plans</a> section.</p>
                        <p>You can get a quick response to any questions via our customercare emails: <a href="htts://t.me/icocrypto">htts://t.me/icocrypto</a></p>
                        <p>Don’t hesitate to invite your friends! If your invited referral purchased token then both of you get 10% bonus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="token-card">
                    <div className="token-info">
                      <span className="token-smartag">COX Phase 2</span>
                      <h2 className="token-bonus">20% <span>Current Bonus</span></h2>
                      <ul className="token-timeline">
                        <li><span>START DATE</span>14 Jul 2021</li>
                        <li><span>END DATE</span>25 Aug 2021</li>
                      </ul>
                    </div>
                    <div className="token-countdown">
                      <span className="token-countdown-title">THE BONUS END IN</span>
                      <div className="token-countdown-title" >25 Aug 2021</div>
                    </div>
                  </div>
                  <div className="progress-card">
                    <h4>Token Bonus </h4>
                    <ul className="progress-info">
                      <li><span>Gains -</span> {gains} COX</li>
                    </ul>
                    <div className="progress-bar">
                      <div className="progress-hcap" style={{ width: "75%" }}>
                        <div>Gold cap <span>75%</span></div>
                      </div>
                      <div className="progress-scap" style={{ width: "60%" }}>
                        <div>Silver cap <span>60%</span></div>
                      </div>
                      <div className="progress-scap" style={{ width: "45%" }}>
                        <div>Bronze cap <span>45%</span></div>
                      </div>
                      <div className="progress-psale" style={{ width: "30%" }}>
                        <div>Starter <span>30%</span></div>
                      </div>
                      <div className="progress-percent" style={{ width: pgrBar }}></div>
                    </div>
                  </div>
                  <div className="gaps-3x"></div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>PreSale</th>
                          <th>Sale Stage 1</th>
                          <th>Sale Stage 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span>Start Date</span>03 July 2018</td>
                          <td><span>Start Date</span>15 August 2018</td>
                          <td><span>Start Date</span>28 October 2018</td>
                        </tr>
                        <tr>
                          <td><span>End Date</span>19 July 2018</td>
                          <td><span>End Date</span>02 September 2018</td>
                          <td><span>End Date</span>16 November 2018</td>
                        </tr>
                        <tr>
                          <td><span>Bonus</span>30%</td>
                          <td><span>Bonus</span>20%</td>
                          <td><span>Bonus</span>10%</td>
                        </tr>
                        <tr>
                          <td><span>Soft Cap</span>$ 20M</td>
                          <td><span>Hard Cap</span>$ 50M</td>
                          <td><span>Hard Cap</span>$ 30M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
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
  user: state.setCurrentUser.user
});
export default connect(mapStateToProps, { logout })(withRouter(UserDashboard))
