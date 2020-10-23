import React, { Fragment, useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { logout, fetchUsers } from '../../actions';
import AdminHeader from '../Commons/AdminHeader'
import AdminSideNav from '../Commons/AdminSideNav'

function Users({ logout, history, user, fetchUsers, users }) {
  const [active, setActive] = useState(false);
  const [userList, setUserList] = useState([]);



  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    setUserList(users)
  }, [users]);
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
        <AdminHeader toggleClass={toggleClass} active={active} logOut={logOut} user={user} />
        <div className="user-wraper">
          <div className="container">
            <div className="d-flex">
              <AdminSideNav active={active} user={user}/>

              <div className="user-content">
                <div className="user-panel">
                  <h2 className="user-panel-title">Clients</h2>
                  {/* if there is no transaction you can use this code */}
                  {userList.length > 0 ?

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
                              <th className="tranx-no sorting_disabled" rowSpan={1} colSpan={1}><span>Username</span></th>
                              <th className="tranx-token sorting_disabled" rowSpan={1} colSpan={1}><span>Acc Bal</span></th>
                              <th className="tranx-amount sorting_disabled" rowSpan={1} colSpan={1}>
                                <span>Plan Type</span>
                              </th>
                              <th className="tranx-amount sorting_disabled" rowSpan={1} colSpan={1}>
                                <span>Earnings</span>
                              </th>

                              <th className="tranx-action sorting_disabled" rowSpan={1} colSpan={1} />

                            </tr>
                          </thead>
                          <tbody>
                            {userList.map(user => {
                              return (
                                <tr role="row" className={user.status === true ? 'odd' : 'even'} key={user._id} >
                                  {user.status !== true ? <td className="tranx-status tranx-status-pending">
                                    <span className="d-none">Pending</span>
                                    <em className="ti ti-alert" />
                                  </td> :
                                    <td className="tranx-status tranx-status-approved">

                                      <span className="d-none">Approved</span>
                                      <em className="ti ti-check" />
                                    </td>}
                                    <td className="tranx-no">
                                  <Link to={`/users/${user._id}`} style={{ fontSize: '15px'}}>
                                    <span>{user.username}</span>
                                  </Link>
                                    <span>
                                    {moment(user.createdAt).format('DD MMM, YY h:mm A')}
                                    </span>
                                    </td>
                                  <td className="tranx-token"><span>{user.accountBal}</span>USD</td>
                                  <td className="tranx-amount"><span>{user.planType}</span> </td>
                                  <td className="tranx-amount"><span>{user.earnedTotal}</span> </td>
                                  {/* <td className="tranx-action">
                                                            <a href="#" data-toggle="modal" data-target="#tranxApproved"><em className="ti ti-more-alt" /></a>
                                                        </td> */}
                                  {/* use this later for version 2 */}
                                </tr>
                              )
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
                      <span className="status-text">You have no clients records yet!.</span>
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
const mapStateToProps = state => ({
  user: state.setCurrentUser.user,
  users: state.getUsers.users || []
});
export default connect(mapStateToProps, { logout, fetchUsers })(withRouter(Users))