// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Chart from './components/Chart';
import NodeManager from './components/NodeManager';
import './i18n/i18n';

const App = () => (
  <div>
    <Header />
    <NodeManager />
    <Chart />
  </div>
);

export default App;
