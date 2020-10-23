import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import CheckLoggedInUser from './utils/CheckLoggedInUser'
import { PrivateRoute } from './utils/PrivateRoute'
import Home from './Components/Home';
import Signin from './Components/User/Authentication/Signin';
import Signup from './Components/User/Authentication/Signup';
import AdminLogin from './Components/Admin/Authentication/Signin';
import VerifyToken from './Components/User/Authentication/VerifyToken';
import Recovery from './Components/User/Authentication/Recovery';
import UserDashboard from './Components/User/UserDashboard';
// import Profile from './Components/User/Profile';
import NotFound from './Components/NotFound';
import { logout } from './actions';


function App(props) {
  const removeToken = () => {
    props.logout()
  }
    return (
      <Router >
        <Fragment>
          <Switch>
            <Route exact path="/" component={CheckLoggedInUser(Home)} />
            <Route exact path="/signin" component={CheckLoggedInUser(Signin)} />
            <Route exact path="/signup" component={CheckLoggedInUser(Signup)} />
            <Route exact path="/verifytoken" component={CheckLoggedInUser(VerifyToken)} />
            <Route exact path="/recovery" component={CheckLoggedInUser(Recovery)} />
            <PrivateRoute role={props.role} status={props.status} removeToken={removeToken} requiredRoles= {['user']} exact path="/dashboard" component={UserDashboard} /> 
            {/* <PrivateRoute role={props.role} status={props.status} removeToken={removeToken}requiredRoles= {['user']} exact path="/dashboard" component={()=> <Profile isTrue={true}/>} />  */}
            {/* <PrivateRoute role={this.props.role} requiredRoles= {['user']} exact path="/admin/dashboard" component={UserDashboard} />  */}
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
}
const mapStateToProps = state => ({
  role: state.setCurrentUser.user.role,
  status: state.setCurrentUser.user.status,
});
export default connect(mapStateToProps, {logout})(App);
