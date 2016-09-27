import React from 'react';
import Header from './components/elements/Header';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  render(){
    return (
        <div>
          <Header />
          {this.props.children}
        </div>
      );
  }
}
