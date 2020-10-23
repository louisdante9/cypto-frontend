import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import btcValue from 'btc-value';
import { logout, buyMinings, fetchAUserDetails } from '../../actions';
import Header from '../Commons/Header'
import SideNav from '../Commons/SideNav'
function MiningPlan({ logout, history, user, buyMinings, errors, getUser, fetchAUserDetails }) {
  const [percent, setPercent] = useState('30')
  const [btcAmount, setBtcAmount] = useState('1')
  const [payment, setPayment] = useState('0')
  const [active, setActive] = useState(false);


  useEffect(() => {
    btcValue.setApiKey('05aa5bf4-2aae-47f7-8d42-97b1dfe1a230');
    btcValue({ isDecimal: true })
      .then((value) => {
        setBtcAmount(value)
      });
  }, [setBtcAmount]);
  useEffect(() => {
    async function fetchData() {
      fetchAUserDetails(user.id)
    }
    fetchData();
  }, [user,fetchAUserDetails]);

  const logOut = (event) => {
    event.preventDefault();
    logout()
    history.push('/signin');
  }

  const toggleClass = () => {
    setActive(!active)
  }

  const rand = (n) => {
    let r = Math.random().toString(36).substring(n);
    return r.toUpperCase()
  }

  const paymentHandler = (event) => {
    event.preventDefault();
    let transactionNo = rand(4);
    let btcAmt = parseFloat(payment / btcAmount).toFixed(3);
    let gains = ((payment * percent) / 100) + parseInt(payment)
    let transaction = {
      transactionNo,
      payment,
      btcAmt,
      gains,
      userId: user.id,
      username: user.username
    }
      buyMinings(transaction, history)
  
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
                {errors.message && (<div className="note note-lg note-no-icon note-danger">
                  <p>{errors.message}</p>
                </div>)}
                <div className="user-panel">
                  <h2 className="user-panel-title">Buy Mining Plans</h2>
                  <form action="#">
                    <h5 className="user-panel-subtitle">01. Choose plan, Deposite Bitcoin, watch interest grow everyday</h5>
                    <div className="gaps-1x" />
                    <div className="payment-list">
                      <div className="row">
                        <div className="col-md-3 col-sm-6">
                          <div className="payment-item">
                            <input className="payment-check" type="radio" id="payeth" name="payOption" defaultValue="30" defaultChecked onClick={(e) => setPercent(e.target.defaultValue)} />
                            <label htmlFor="payeth">
                              <div className="payment-icon payment-icon-btc"><em className="payment-icon fab fa-btc" /></div>
                              <span className="payment-cur">Plan A</span>
                            </label>
                            <span>@ 30%</span>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-3 col-sm-6">
                          <div className="payment-item">
                            <input className="payment-check" type="radio" id="paylightcoin" name="payOption" defaultValue="45" onClick={(e) => setPercent(e.target.defaultValue)} />
                            <label htmlFor="paylightcoin">
                              <div className="payment-icon payment-icon-btc"><em className="payment-icon fab fa-btc" /></div>
                              <span className="payment-cur">Plan B</span>
                            </label>
                            <span>@ 45%</span>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-3 col-sm-6">
                          <div className="payment-item">
                            <input className="payment-check" type="radio" id="paybtc" name="payOption" defaultValue="60" onClick={(e) => setPercent(e.target.defaultValue)} />
                            <label htmlFor="paybtc">
                              <div className="payment-icon payment-icon-btc"><em className="payment-icon fab fa-btc" /></div>
                              <span className="payment-cur">Plan C</span>
                            </label>
                            <span>@ 60%</span>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-3 col-sm-6">
                          <div className="payment-item">
                            <input className="payment-check" type="radio" id="payusd" name="payOption" defaultValue="75" onClick={(e) => setPercent(e.target.defaultValue)} />
                            <label htmlFor="payusd">
                              <div className="payment-icon payment-icon-btc"><em className="payment-icon fab fa-btc" /></div>
                              <span className="payment-cur">Plan D</span>
                            </label>
                            <span>@ 75%</span>
                          </div>
                        </div>{/* .col */}
                      </div>{/* .row */}
                    </div>{/* .payment-list */}
                    <div className="gaps-1x" />
                    <h5 className="user-panel-subtitle">02. Set the amount you would like to invest.</h5>
                    <p>To become a part of the ICO Crypto project,  purchase of COX investment will only be possible after payment made and receving an approval.  As you like to participate our project, please select investment plan and enter the amount you wish to purchase. You can buy ICOX tokens using BTC or USD. </p>
                    <div className="gaps-1x" />
                    <div className="row">
                      <div className="col-md-8">
                        <div className="payment-calculator">
                          <div className="payment-get">
                            <label htmlFor="paymentGet">Minings to Purchase</label>
                            <div className="payment-input">
                              <input className="input-bordered" type="text" id="paymentGet" name="btcAmount" value={parseFloat(payment / btcAmount).toFixed(3)} readOnly />
                              <span className="payment-get-cur payment-cal-cur">cox</span>
                            </div>
                          </div>
                          <em className="ti ti-exchange-vertical" />
                          <div className="payment-from">
                            <label htmlFor="paymentFrom">Payment Amount</label>
                            <div className="payment-input">
                              <input className="input-bordered" type="number" id="paymentFrom" name="payment" placeholder="0" onChange={(e) => setPayment(e.target.value)} />
                              <span className="payment-from-cur payment-cal-cur">usd</span>
                            </div>
                          </div>
                        </div>
                        <div className="gaps-2x d-md-none" />
                      </div>{/* .col */}
                      <div className="col-md-4">
                        <div className="payment-bonus">
                          <h6 className="payment-bonus-title">Current Bonus</h6>
                          <span className="payment-bonus-amount">{percent}% <span>on purchase</span></span>
                        </div>
                        <div className="gaps-1x d-md-none" />
                      </div>{/* .col */}
                    </div>{/* .row */}
                    <div className="gaps-1x" />
                    <div className="payment-calculator-note"><i className="fas fa-info-circle" />The calculator helps you to convert required currency to BTC current value.</div>
                    <div className="gaps-3x" />
                    <div className="payment-summary">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="payment-summary-item payment-summary-final">
                            <h6 className="payment-summary-title">Final Payment</h6>
                            <div className="payment-summary-info">
                              <span className="payment-summary-amount">{payment ? payment : 0}.00</span> <span>usd</span>
                            </div>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-4">
                          <div className="payment-summary-item payment-summary-bonus">
                            <h6 className="payment-summary-title">Received Bonus</h6>
                            <div className="payment-summary-info">
                              <span>+</span> <span className="payment-summary-amount">${(payment * percent) / 100}.00</span> <span>cox</span>
                            </div>
                          </div>
                        </div>{/* .col */}
                        <div className="col-md-4">
                          <div className="payment-summary-item payment-summary-tokens">
                            <h6 className="payment-summary-title">Earnings Received</h6>
                            <div className="payment-summary-info">
                              <span className="payment-summary-amount">${((payment * percent) / 100) + parseInt(payment) || 0}</span> <span>cox</span>
                            </div>
                          </div>
                        </div>{/* .col */}
                      </div>{/* .row */}
                    </div>{/* .payment-summary */}
                    <div className="btn btn-primary payment-btn" onClick={paymentHandler}>Purchase Plan</div>
                  </form>{/* form */}
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
  errors: state.errors,
  getUser: state.getUser
});
export default connect(mapStateToProps, { logout, buyMinings, fetchAUserDetails })(withRouter(MiningPlan))