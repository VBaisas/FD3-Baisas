import React from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  render() {
    let lines=this.props.text.split(/<br *\/?>/);
    let lines2=[];
    for (let i=0; i<lines.length; i++) {
      if (i)
        lines2.push(<br/>);
      lines2.push(lines[i]);
    }
    return <div className="Lines">{lines2}</div>;
    
  }
}

export default BR2JSX;
