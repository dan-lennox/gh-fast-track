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
            <Layer index={0} />
            <Layer index={1} />
            <Layer index={2} />
          </div>
        </div>
      </section>
    );
  }
}

export default DesignBuilder;