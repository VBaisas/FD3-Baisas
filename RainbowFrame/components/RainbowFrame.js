import React from 'react';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  render() {
    let curr = this.props.children;
    for ( let color of this.props.colors) {
      curr = <div className='Frame' style={{border:"solid 7px "+color}}>{curr}</div>;
    };

    return curr
  }

}

export default RainbowFrame;
