import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DGLuxPage from "../ts";

ReactDOM.render(
  <div style={{width: '100%'}}>
    <DGLuxPage project='ciscoKinetic' page='floorplan.dg5' style={{
      position: 'absolute',
      top: 0, left: 0, width: '100%', height: 300
    }}/>
    <DGLuxPage project='rick' page='parametersDemo.dg5' style={{
      position: 'absolute',
      top: 300, left: 300, width: 300, height: 300
    }}/>

  </div>,
  document.getElementById('app')
);