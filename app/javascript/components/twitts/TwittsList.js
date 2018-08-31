import React from "react"
import PropTypes from "prop-types"
class TwittsList extends React.Component {
   constructor(props) {
    super(props);
    this.twittsList = props.twitts.map((twitt) =>
      <div className='mb-5'>
        <p>{twitt.text}</p>
        <span className="text-success">{twitt.user}</span>
        <span className="float-right text-success">{twitt.posted_at}</span>
      </div>
      )
  }

  render () {
    return (
      this.twittsList
    );
  }
}

TwittsList.propTypes = {
  twitts: PropTypes.array
};
export default TwittsList
