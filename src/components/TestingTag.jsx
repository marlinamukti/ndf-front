import React from 'react';
import ImageContainer from './ImageContainer';

class TestingTag extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        boxSize: 200
      }
    }
  
    handleClick = () => {
      if (this.state.boxSize < 400){  
        this.setState({
          boxSize: 400
        });
      } else {
        this.setState({
          boxSize: 200
        });
      }
    }
  
    render() {
      return (
        <ImageContainer boxSize={this.state.boxSize} onClick={this.handleClick} />
      );
    }
}

export default TestingTag;