import React from "react"
import PropTypes from "prop-types"
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.csrf_token;
  }

  render () {
    return (
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <form method="post" action="/users/sign_in">
            <input type="hidden" name="authenticity_token" value={this.token} readOnly={true} />
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control"  name="user[email]" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="user[password]" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default LoginForm
