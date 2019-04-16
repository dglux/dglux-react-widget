import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DGLuxPage from "../js";

let dgluxBaseUrl = "/dglux5/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: 'blue',
      string: 'abcd',
      value: 40
    };
    this.onInput1Change = (e) => {
      this.setState({bg: e.target.value});
    };
    this.onInput2Change = (e) => {
      this.setState({string: e.target.value});
      this.setState({value: Number(e.target.value)});
    }
  }


  render() {
    let {bg, string, value} = this.state;
    return (
      <DGLuxPage.contextType.Provider value={{dgluxBaseUrl}}>
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
          <input defaultValue='blue' onChange={this.onInput1Change}/>
          <input defaultValue='abcd' onChange={this.onInput2Change}/>

          <DGLuxPage project='example' page='page1.dg5' value={value} style={{
            border: 'solid 1px white', position: 'relative', flex: '0 0 100%',
            height: 300
          }}/>
          <DGLuxPage project='example' page='page2.dg5' bg={bg} string={string} style={{
            border: 'solid 1px white', position: 'relative',
            width: 300, height: 300
          }}/>
        </div>
      </DGLuxPage.contextType.Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);