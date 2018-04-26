import React, { Component } from 'react';
import Design from './Design';
import Layer from './Layer';

class DesignBuilder extends Component {

  render() {
    return (
      <section className="section">
        <div className="row">
          <div>
            <Design />
          </div>
          <div className="col s4" style={{
            padding: '20px',
            marginTop: '40px',
            backgroundColor: '#fff',
            borderRadius: '10px'
          }}>
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