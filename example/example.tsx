import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DGLuxPage from "../ts";


ReactDOM.render(
  <div style={{width: '100%'}}>
    <DGLuxPage project='ciscoKinetic' page='floorplan.dg5'/>
  </div>,
  document.getElementById('app')
);