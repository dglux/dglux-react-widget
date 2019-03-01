import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DGLuxPage from "../ts";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: 'blue',
      string: 'abcd'
    };
    this.onInput1Change = (e) => {
      this.setState({bg: e.target.value});
    }
    this.onInput2Change = (e) => {
      this.setState({string: e.target.value});
    }
  }

  render() {
    let {bg, string} = this.state;
    return (
      <div style={{width: '100%'}}>
        <DGLuxPage project='rick' page='index.dg5' style={{
          position: 'absolute', border: 'solid 1px white',
          top: 100, left: 0, width: '100%', height: 300
        }}/>
        <DGLuxPage project='rick' page='demo1.dg5' bg={bg} string={string} style={{
          position: 'absolute', border: 'solid 1px white',
          top: 400, left: 0, width: 300, height: 300
        }}/>
        <input defaultValue='blue' onChange={this.onInput1Change}/>
        <input defaultValue='abcd' onChange={this.onInput2Change}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>
  ,
  document.getElementById('app')
);