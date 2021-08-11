import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { logout, fetchTrans, fetchAUserDetails } from '../../actions';
import Header from '../Commons/Header'
import SideNav from '../Commons/SideNav'
import WithState from '../../utils/WithState'

function Transactions({ logout, history, user, fetchTrans, transactions, fetchAUserDetails, getUser, active, setActive }) {
    // const [active, setActive] = useState(false);
    const [transactionList, setTransactionList] = useState([]);

  

    useEffect(() => {
        fetchTrans(user.id);
        fetchAUserDetails(user.id)
    }, [ user, fetchTrans, fetchAUserDetails]);

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
                                    <h2 className="user-panel-title">Transactions</h2>
                                    {/* if there is no transaction you can use this code */}
                                    {transactionList.length > 0 ?

                                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row"><div className="col-10 text-left">
                                                <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                    <label>
                                                        <input type="search" className="form-control form-control-sm" placeholder="Type in to Search" aria-controls="DataTables_Table_0" />
                                                    </label>
                                                </div>
                                            </div>
                                                <div className="col-2 text-right"><div className="data-table-filter dropdown"><a href="#" data-toggle="dropdown">
                                                    <em className="ti ti-settings" />
                                                </a><ul className="dropdown-menu dropdown-menu-right">
                                                        <li><input className="data-filter data-filter-approved" type="radio" name="filter" id="all" defaultChecked defaultValue />
                                                            <label htmlFor="all">All</label>
                                                        </li>
                                                        <li>
                                                            <input className="data-filter data-filter-approved" type="radio" name="filter" id="approved" defaultValue="approved" />
                                                            <label htmlFor="approved">Approved</label>
                                                        </li>
                                                        <li>
                                                            <input className="data-filter data-filter-pending" type="radio" name="filter" defaultValue="pending" id="pending" />
                                                            <label htmlFor="pending">Pending</label></li>
                                                    </ul>
                                                </div></div></div><div className="row">
                                                <div className="col-12"><div className="overflow-x-auto"><table className="data-table tranx-table dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                                    <thead>
                                                        <tr role="row"><th className="tranx-status sorting_disabled" rowSpan={1} colSpan={1} />
                                                            <th className="tranx-no sorting_disabled" rowSpan={1} colSpan={1}><span>TNX NO</span></th>
                                                            <th className="tranx-token sorting_disabled" rowSpan={1} colSpan={1}><span>Tokens</span></th>
                                                            <th className="tranx-amount sorting_disabled" rowSpan={1} colSpan={1}>
                                                                <span>Amount</span>
                                                            </th>

                                                            <th className="tranx-action sorting_disabled" rowSpan={1} colSpan={1} />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {transactionList.map(transaction => {
                                                            return (
                                                                <tr role="row" className="odd" key={transaction._id}>
                                                                    {transaction.status === 'pending' ? <td className="tranx-status tranx-status-pending"><span className="d-none">Pending</span><em className="ti ti-alert" /></td> :
                                                                        <td className="tranx-status tranx-status-approved"><span className="d-none">Approved</span><em className="ti ti-check" /></td>}
                                                                    <td className="tranx-no"><span>{transaction.transactionNO}</span>{moment(transaction.createdAt).format('DD MMM, YY h:mm A')}</td>
                                                                    <td className="tranx-token"><span>{transaction.btcAmt}</span>BTC</td>
                                                                    <td className="tranx-amount"><span>{transaction.payment}</span>USD <em className="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" data-original-title="1 ETH = 100 ICOX" /></td>
                                                                    {/* <td className="tranx-action">
                                                            <a href="#" data-toggle="modal" data-target="#tranxApproved"><em className="ti ti-more-alt" /></a>
                                                        </td> */}
                                                                    {/* use this later for version 2 */}
                                                                </tr>)
                                                        })}
                                                        {/* 
                                                        * use this later for version 2 *
                                                        <tr role="row" className="even">
                                                        <td className="tranx-status tranx-status-pending"><span className="d-none">Pending</span><em className="ti ti-alert" /></td>
                                                        <td className="tranx-no"><span>ICIYOW0102</span>08 Jul, 18  10:20PM</td>
                                                        <td className="tranx-token"><span>+5,600</span>ICOX</td>
                                                        <td className="tranx-amount"><span>56.00</span>ETH <em className="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" data-original-title="1 ETH = 100 ICOX" /></td>
                                                        <td className="tranx-action">
                                                            <a href="#" data-toggle="modal" data-target="#tranxPending"><em className="ti ti-more-alt" /></a>
                                                        </td>
                                                    </tr> */}
                                                    </tbody>
                                                </table>
                                                </div>
                                                </div>
                                            </div>
                                            {/* 
                                              * use this later for version 2 *
                                            <div className="row">
                                                <div className="col-sm-6 text-left">
                                                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Prev</a>
                                                            </li>
                                                            <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">2</a>
                                                            </li>
                                                            <li className="paginate_button page-item next" id="DataTables_Table_0_next">
                                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx={3} tabIndex={0} className="page-link">Next</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 text-sm-right">
                                                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 -7 of 10</div>
                                                </div>
                                            </div> */}
                                        </div>

                                        : <div className="status status-empty">
                                            <div className="status-icon">
                                                <em className="ti ti-files" />
                                                <div className="status-icon-sm">
                                                    <em className="ti ti-close" />
                                                </div>
                                            </div>
                                            <span className="status-text">You have not contributed yet! You should make some.</span>
                                            <a href="tokens.html" className="btn btn-primary">Contribute Now</a>
                                        </div>}
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
const mapStateToProps = state => {
    console.log(state.getUser, 'this is bad react')
    const user= state.setCurrentUser.user;
    const transactions= state.getUserTransactions.transactions || [];
    const getUser= state.getUser
     return {user, transactions, getUser}
};
export default WithState(connect(mapStateToProps, { logout, fetchTrans, fetchAUserDetails })(withRouter(Transactions)))