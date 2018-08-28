import React from "react"
import PropTypes from "prop-types"
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.csrf_token;
  }

  render () {
    return (
      <form action="/twitts/index">
        <input type="hidden" name="authenticity_token" value={this.token} readOnly={true} />
        <div className="form-group">
          <label htmlFor="tags">Input tags, please:</label>
          <input type="text" className="form-control" name="tags" />
        </div>
        <button type="submit" className="btn btn-primary">
          Go
        </button>
      </form>
    );
  }
}

export default SearchForm
