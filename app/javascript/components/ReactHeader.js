import React from "react"
import PropTypes from "prop-types"
class ReactHeader extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-light bg-light">
        <h4 className="text-bold text-primary">Twitter Super Client</h4>
        <span className="text-secondary">React Header</span>
        <a href="/users/sign_out" data-method="delete">Sign Out</a>
      </nav>
    );
  }
}

export default ReactHeader
