import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Design extends Component {

  componentDidMount() {
    this.props.updateCloudinaryUrl(this.props.colours);
  }

  render() {
    return (
      <section className="section">
        <img src={ this.props.cloudinaryUrl } alt="Test Fastrack Pattern" width="100%" style={{ backgroundColor: 'black' }} />
      </section>
    );
  }
}

function mapStateToProps({ cloudinaryUrl, colours }) {
  return { cloudinaryUrl, colours };
}

export default connect(mapStateToProps, actions)(Design);