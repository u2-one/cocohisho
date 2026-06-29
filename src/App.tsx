import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import Node03Page from './pages/Node03Page';
import MayoiPage from './pages/MayoiPage';
import AroundTheClockPage from './pages/AroundTheClockPage';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/cocohisho" element={<TopPage />} />
        <Route path="/" element={<TopPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/NODE03/*" element={<Node03Page />} />
        <Route path="/Mayoi_Anomaly_Report/*" element={<MayoiPage />} />
        <Route path="/Around_the_Clock/*" element={<AroundTheClockPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
