import React, { Component } from 'react';
import Design from './Design';
import Layer from './Layer';

class DesignBuilder extends Component {

  render() {
    return (
      <section className="section">
        <div className="row">
          <div className="col s8">
            <Design />
          </div>
          <div className="col s4">
            <Layer />
            <Layer />
            <Layer />
          </div>
        </div>
      </section>
    );
  }
}

export default DesignBuilder;