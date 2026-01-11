
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Trends from './pages/Trends';
import Causes from './pages/Causes';
import Impacts from './pages/Impacts';
import Solutions from './pages/Solutions';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
