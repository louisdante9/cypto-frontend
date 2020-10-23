import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment'
// import btcValue from 'btc-value';
import { logout, fetchTrans, fetchAUserDetails } from '../../actions';
import Header from '../Commons/Header'
import SideNav from '../Commons/SideNav'

function UserDashboard({ logout, history, user, fetchTrans, fetchAUserDetails, transactions, getUser }) {
  const [active, setActive] = useState(false);
  const [pgrBar, setPgrBar] = useState('10%');
  const [transactionList, setTransactionList] = useState([]);



  useEffect(() => {
    const gains = user.earnedTotal
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

  }, [user.earnedTotal]);
  useEffect(() => {
    fetchTrans(user.id);
    fetchAUserDetails(user.id)
  }, [user, fetchTrans, fetchAUserDetails]);

  useEffect(() => {
    setTransactionList(transactions)
  }, [transactions]);

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
        <Header toggleClass={toggleClass} active={active} logOut={logOut} user={getUser} />
        <div className="user-wraper">
          <div className="container">
            <div className="d-flex">
              <SideNav active={active} user={getUser} />

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
                          <li>{`${user.totalInvestment}`} BTC</li>
                          <li>{`${user.earnedTotal}`} USD</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tile-item tile-light">
                        <div className="tile-bubbles"></div>
                        <h6 className="tile-title">YOUR INVESTMENT</h6>
                        <ul className="tile-info-list">
                          <li><span>{`${user.totalInvestment}`}</span>BTC</li>
                          <li><span>~</span> = </li>
                          <li><span>{`${user.earnedTotal}`}</span>USD</li>
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
                      <li><span>Gains -</span> ${user.earnedTotal} COX</li>
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
                    {transactionList.length > 0 ?
                      <table className="table">
                        <thead>
                          <tr>
                            <th>TNX NO</th>
                            <th>Tokens</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactionList.slice(0, 4).map(transaction => {
                            return (
                              <tr key={transaction._id}>
                                <td ><span>{transaction.transactionNO}</span>{moment(transaction.createdAt).format('DD MMM, YY h:mm A')}</td>
                                <td ><span>{transaction.btcAmt}</span>BTC</td>
                                <td ><span>{transaction.payment}</span>USD </td>
                              </tr>)
                          })}

                        </tbody>
                      </table>
                      : <div style={{ textAlign: "center" }}>
                        You have not contributed yet! You should make some.
                        </div>}
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
  user: state.setCurrentUser.user,
  transactions: state.getUserTransactions.transactions || [],
  getUser: state.getUser

});
export default connect(mapStateToProps, { logout, fetchTrans, fetchAUserDetails })(withRouter(UserDashboard))
