import React from 'react';

export default class Range extends React.Component {
    constructor(props) {
      super(props);
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(e) {
      this.props.updateRange(e.target.value);
    }
    
    render() {
      // console.log(this.props);
      const { range } = this.props;
      return (
        <div>
          <input id="range" type="range"
            value={range}
            min="0"
            max="3000"
            step="1"
            onChange={this.updateRange}
          />
          <span id="output">{range}</span>
        </div>
      )
    }
  }
  
  

