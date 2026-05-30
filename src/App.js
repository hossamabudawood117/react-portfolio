import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProjectDetail from './pages/ProjectDetail';
import ReadingList from './pages/ReadingList';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="blob"></div>
      <div className="blob2"></div>
      
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container my-auto py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project/synapse" element={<ProjectDetail />} />
            <Route path="/reading" element={<ReadingList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;