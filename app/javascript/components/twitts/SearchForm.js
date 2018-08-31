import React from "react"
import PropTypes from "prop-types"
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.csrf_token;
    this.state = {tags: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(tags) {
    this.setState({tags})
  }

  render () {
    return (
      <form action="/v1/twitts">
        <input type="hidden" name="authenticity_token" value={this.token} readOnly={true} />
        <TagsInput
          value={this.state.tags}
          onChange={this.handleChange}
          addKeys={[9, 13, 32]}/>
        <button type="submit" className="btn btn-primary">
          Go
        </button>
      </form>
    );
  }
}

export default SearchForm
