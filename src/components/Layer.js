import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Layer extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => {
    console.log(value);
    this.setState({value});
  }

  render() {
    return (
      <SelectField
        floatingLabelText={ `Layer ${this.props.index}` }
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={'#857f6e'} style={{ backgroundColor: '#857f6e', color: '#fff' }} primaryText="F126H" />
        <MenuItem value={'#8a7661'} style={{ backgroundColor: '#8a7661', color: '#fff' }} primaryText="F683C" />
        <MenuItem value={'#9f7e4a'} style={{ backgroundColor: '#9f7e4a', color: '#fff' }} primaryText="F120P" />
        <MenuItem value={'#787c6b'} style={{ backgroundColor: '#787c6b', color: '#fff' }} primaryText="F677J" />
        <MenuItem value={'#575a54'} style={{ backgroundColor: '#575a54', color: '#fff' }} primaryText="F539B" />
        <MenuItem value={'#5c5d27'} style={{ backgroundColor: '#5c5d27', color: '#fff' }} primaryText="F434C" />
        <MenuItem value={'#b14625'} style={{ backgroundColor: '#b14625', color: '#fff' }} primaryText="F174k" />
        <MenuItem value={'#821416'} style={{ backgroundColor: '#821416', color: '#fff' }} primaryText="F221F" />
        <MenuItem value={'#433826'} style={{ backgroundColor: '#433826', color: '#fff' }} primaryText="F661L" />
        <MenuItem value={'#433826'} style={{ backgroundColor: '#433826', color: '#fff' }} primaryText="F407F" />
        <MenuItem value={'#200f0c'} style={{ backgroundColor: '#200f0c', color: '#fff' }} primaryText="F644L" />
        <MenuItem value={'#000000'} style={{ backgroundColor: '#000000', color: '#fff' }} primaryText="Black" />
      </SelectField>
    );
  }
}

export default Layer;