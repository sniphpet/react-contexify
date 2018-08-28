import React, { PureComponent } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export default function(Component) {
  return class WithProxy extends PureComponent {
    constructor(props) {
      super(props)
      this.node = null;
    }

    componentDidMount() {
      this.appendToBody(this.props);
    }

    componentWillUnmount() {
      this.removeFromBody();
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.removeFromBody();
        this.appendToBody(this.props);
      }
    }

    removeFromBody() {
      document.body.removeChild(this.node);
      unmountComponentAtNode(this.node);
    }

    appendToBody(props) {
      const container = document.createElement('div');
      this.node = document.body.appendChild(container);
      render(<Component {...props} key={props.id} />, this.node);
    }

    render() {
      return null;
    }
  };
}
