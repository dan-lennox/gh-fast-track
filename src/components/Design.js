import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Design extends Component {

  //cloudinary.image("sample", {format: "png", width: 100, height: 100, crop: "fill"})
  componentDidMount() {
    this.props.updateCloudinaryUrl(this.props.colours);
  }

  render() {
    return (
      <section className="section">
        <img src={ this.props.cloudinaryUrl } alt="Test Fastrack pattern" width="100%" style={{ backgroundColor: 'black' }} />
      </section>
    );
  }
}

// Using object destructuring.
function mapStateToProps({ cloudinaryUrl, colours }) {
  return { cloudinaryUrl, colours };
}

export default connect(mapStateToProps, actions)(Design);