import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Design extends Component {

  componentDidMount() {
    this.props.updateCloudinaryUrl(this.props.colours);
  }

  render() {
    return (
      <section className="section" style={{
        backgroundImage: 'url(' + this.props.cloudinaryUrl + ')',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        zIndex: '-1'
      }}>
        {/*<img src={ this.props.cloudinaryUrl } alt="Test Fastrack Pattern" style={{ backgroundColor: 'black' }} />*/}
      </section>
    );
  }
}

function mapStateToProps({ cloudinaryUrl, colours }) {
  return { cloudinaryUrl, colours };
}

export default connect(mapStateToProps, actions)(Design);