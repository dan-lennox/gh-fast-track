import React, { Component } from 'react';
import cloudinary from 'cloudinary';

class Design extends Component {

  //cloudinary.image("sample", {format: "png", width: 100, height: 100, crop: "fill"})
  componentDidMount() {
    // @todo: Implement fetchImage() action + reducer.
    //this.props.fetchImage();

    // Connect to Cloudinary (@todo: move to action).
    cloudinary.config({
      cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    });

    // Temporary hardcoded retrieval.
    this.setState({
      image: cloudinary.url('MOI-2016-0659A_f12_voo2zu', {transformation: [
        {color: "#857f6e", effect: "colorize:100"},
        {color: "#575a54", effect: "colorize:100", overlay: "MOI-2016-0659A_f8_rcvosy"},
        {color: "#000000", effect: "colorize:100", overlay: "MOI-2016-0659A_f1_ze1rsc"},
        {effect: "pixelate:5"},
        {effect: "blur:65"},
        {effect: "multiply", overlay: "greige_cutpile_yambmx", opacity: 100}
      ]})
    });
  }

  state = {
    image: null
  };


  render() {
    return (
      <section className="section">
        <img src={ this.state.image } alt="test" width="100%" style={{ backgroundColor: 'black' }} />
      </section>
    );
  }
}

export default Design;