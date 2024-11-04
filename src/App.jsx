import React from 'react';
import Header from './components/Header';
import NodeManager from './components/NodeManager';
import Chart from './components/Chart';
import './styles/index.css';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <div className="node-manager">
        <NodeManager />
      </div>
      <div className="sankey-diagram">
        <Chart />
      </div>
    </div>
  </div>
);

export default App;
