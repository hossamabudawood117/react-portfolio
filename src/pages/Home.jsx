import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Live Telemetry State
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [ping, setPing] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setPing(Math.floor(Math.random() * (35 - 18 + 1) + 18)); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-4 page-transition">
      
      {/* 1. HERO SECTION */}
      <section className="text-center py-5 my-4">
        <h1 className="display-2 fw-bold mb-3">Curating the <span className="gradient-text">Unseen</span></h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          A deep dive into my creative process, technical experiments, and the "seeds" of ideas I'm growing this year.
        </p>
        <div className="text-info small fw-bold tracking-wider mt-4" style={{ opacity: 0.6 }}>
          Scroll down to explore deep modules ↓
        </div>
      </section>

      {/* 2. CORE BENTO GRID AREA */}
      <div className="row g-4 mb-5"> 
        
        {/* Box 1: Live Telemetry Card (New Advanced Feature) */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="custom-bento-card h-100" style={{ borderTop: '2px solid var(--primary)' }}>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-transparent border border-primary text-primary">Live Diagnostics</span>
                <span className="text-success small fw-bold">● ONLINE</span>
              </div>
              <h3 className="h4 fw-bold text-white mb-4">System Telemetry</h3>
              
              <div className="d-flex justify-content-between text-muted small mb-2">
                <span>Local Execution:</span>
                <span className="text-white font-monospace">{time}</span>
              </div>
              <div className="d-flex justify-content-between text-muted small mb-2">
                <span>Server Uplink Ping:</span>
                <span className="text-info font-monospace">{ping}ms</span>
              </div>
              <div className="d-flex justify-content-between text-muted small">
                <span>Memory Allocation:</span>
                <span className="text-white font-monospace">24.6 MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Featured Project Spot */}
        <div className="col-12 col-md-6 col-lg-8">
          <div className="custom-bento-card h-100">
            <div>
              <span className="badge mb-2">Case Study</span>
              <h2 className="fw-bold text-white">Project: Synapse</h2>
              <p className="text-muted mb-0">An AI-driven interface tracking real-time layout vector parameters based smoothly on human focus signals.</p>
            </div>
            <Link to="/project/synapse" className="btn btn-primary align-self-start mt-4 px-4 py-2" style={{ color: '#030712' }}>View Case Study</Link>
          </div>
        </div>

        {/* Box 3: Architect Profile */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="custom-bento-card h-100">
            <div>
              <h3 className="h4 fw-bold text-white">Architect</h3>
              <p className="text-muted small mb-0">Building digital ecosystems at the intersection of design rules and raw structural system programming logic.</p>
            </div>
            <Link to="/about" className="text-decoration-none text-info fw-bold mt-4 d-block">Explore Identity &rarr;</Link>
          </div>
        </div>

        {/* Box 4: Animation Progress Tracking */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="custom-bento-card h-100">
            <div>
              <small className="text-uppercase text-muted tracking-wider">Learning Path Status</small>
              <h3 className="h4 fw-bold text-white mt-1">Interaction Design Mechanics</h3>
              <div className="bar-container my-3">
                <div className="bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <p className="text-muted small mb-0">Currently mastering CSS keyframe distribution maps and matrix transformation hooks.</p>
          </div>
        </div>

        {/* Box 5: Philosophical Quote Box */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="custom-bento-card justify-content-center h-100">
            <blockquote className="blockquote mb-0">
              <p className="fs-6 text-white-50">"The computer is the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds."</p>
              <footer className="blockquote-footer mt-2 text-muted">Steve Jobs</footer>
            </blockquote>
          </div>
        </div>

      </div>

      {/* 3. LONG-FORM SECTION: THE RE-ENGINEERED STORY */}
      <section className="py-5 my-5 border-top border-secondary border-opacity-10">
        <div className="row g-5 justify-content-center">
          <div className="col-12 col-xl-10">
            
            <div className="mb-5 text-start">
              <span className="text-info fw-bold text-uppercase tracking-wider small d-block mb-2">// Digital Orchard Manifesto</span>
              <h2 className="display-4 fw-bold text-white">The Philosophy of a Digital Garden</h2>
              <p className="text-muted small">Published Live Workspace — May 2026</p>
            </div>

            <div className="fs-5 text-white-50 mb-5" style={{ lineHeight: '1.8', fontWeight: '300' }}>
              <p className="mb-4">
                Unlike a traditional linear blog space that demands polished, clinical articles, this architecture functions as an active workshop ecosystem. It documents thoughts in their natural state—beginning as single-line code comments or raw design layout tokens before evolving into cohesive system frames.
              </p>
              <p>
                By publishing ideas while they are still growing, the platform creates an open-source archive of technical execution. It shows not just the sterile final results, but the true iterative path of modern software development.
              </p>
            </div>

            <div className="row g-4 mt-2">
              <div className="col-12 col-md-6">
                <div className="p-4" style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--primary)', borderRadius: '0 16px 16px 0' }}>
                  <h4 className="fw-bold text-white mb-2">The Seed Protocol</h4>
                  <p className="text-muted small mb-0">
                    Every project begins as an isolated fragment—a layout experiment, a functional script utility, or a basic component route module. With continuous testing, it matures into a permanent part of the digital portfolio.
                  </p>
                </div>
              </div>
              
              <div className="col-12 col-md-6">
                <div className="p-4" style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 16px 16px 0' }}>
                  <h4 className="fw-bold text-white mb-2">Future Immersive Horizons</h4>
                  <p className="text-muted small mb-0">
                    The next roadmap tier integrates 3D scene layers using WebGL frameworks. This allows visitors to navigate structural code packages as a fluid space, rather than scanning static files.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;