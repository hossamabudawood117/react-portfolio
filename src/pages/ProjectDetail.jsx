import React, { useState } from 'react';

const ProjectDetail = () => {
  // 1. STATE: Track the status of the sandbox environment
  const [sandboxState, setSandboxState] = useState('idle'); // 'idle', 'booting', 'active'

  // 2. LOGIC: Simulate a server boot-up sequence
  const handleInitialize = () => {
    setSandboxState('booting');
    
    // Wait 2 seconds, then change state to 'active'
    setTimeout(() => {
      setSandboxState('active');
    }, 2000);
  };

  return (
    <div className="container py-4 page-transition">
      {/* Title Header */}
      <div className="mb-5 text-start">
        <span className="badge rounded-pill px-3 py-2 mb-3">Featured Deep-Dive</span>
        <h1 className="display-4 fw-bold text-white mb-2">Project: Synapse</h1>
        <p className="lead text-muted" style={{ maxWidth: '800px' }}>
          An AI-driven interface that adapts its layout based on user behavior and focus levels.
        </p>
      </div>

      {/* Main Structural Layout Rows */}
      <div className="row g-4 mb-5 align-items-stretch">
        <div className="col-12 col-lg-8">
          <div className="row g-4 h-100">
            <div className="col-12">
              <div className="custom-bento-card h-100">
                <h3 className="h4 fw-bold text-white mb-3">Project Philosophy</h3>
                <p className="text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                  Synapse breaks down classical structural layout boundaries by tracking real-time user focus signals. Interface parameters automatically scale, re-align, or shift layout distributions based on high-priority interaction data, keeping the user fully locked into their active workspace tasks.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="custom-bento-card h-100">
                <h3 className="h4 fw-bold text-white mb-3">Key Architectural Components</h3>
                <ul className="list-unstyled mb-0 text-muted">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="me-2 text-info">⚡</span>
                    <span><strong className="text-white">Responsive Grid Systems:</strong> Adapts flawlessly from mobile display panels up to extensive widescreen monitors.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="me-2 text-info">🎨</span>
                    <span><strong className="text-white">Dynamic Variables:</strong> Root styling variables tracking dynamic properties adjustments live.</span>
                  </li>
                  <li className="mb-0 d-flex align-items-start">
                    <span className="me-2 text-info">♿</span>
                    <span><strong className="text-white">Accessibility First:</strong> Screen-reader safe layout layers keeping contextual focus completely consistent.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* INTERACTIVE SANDBOX CARD */}
        <div className="col-12 col-lg-4 d-flex">
          <div className="custom-bento-card w-100 text-center d-flex flex-column justify-content-between">
            <div className="mb-4">
              <h4 className="fw-bold text-white mb-2">Build Status</h4>
              <p className="fw-bold small tracking-wider mb-0" style={{ color: sandboxState === 'active' ? '#10b981' : 'var(--primary)' }}>
                {sandboxState === 'active' ? '● NODE ONLINE' : '● LIVE PREVIEW NODE'}
              </p>
            </div>
            
            <div className="w-100 mt-auto">
              {/* Conditional Rendering based on Sandbox State */}
              {sandboxState === 'idle' && (
                <>
                  <p className="text-muted small mb-3">Sandbox environment initialized. Ready for visual execution parameters.</p>
                  <button onClick={handleInitialize} className="btn btn-primary w-100 py-3 fw-bold" style={{ color: '#030712', borderRadius: '12px' }}>
                    Initialize Sandbox
                  </button>
                </>
              )}

              {sandboxState === 'booting' && (
                <div className="py-3">
                  <div className="spinner-border text-info mb-3" role="status" style={{ width: '1.5rem', height: '1.5rem' }}></div>
                  <p className="text-info small fw-bold mb-0 animate-pulse">Compiling modules...</p>
                </div>
              )}

              {sandboxState === 'active' && (
                <div className="text-start p-3 rounded" style={{ background: '#030712', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="d-flex justify-content-between mb-2 border-bottom border-secondary border-opacity-25 pb-2">
                    <small className="text-muted">terminal / bash</small>
                    <small className="text-success fw-bold">v2.0.4</small>
                  </div>
                  <code className="text-success small d-block mb-1">$ node server.js</code>
                  <code className="text-white-50 small d-block mb-1">{">"} Server running on port 3000</code>
                  <code className="text-white-50 small d-block mb-1">{">"} Webpack compiled successfully</code>
                  <code className="text-info small d-block mt-3 border-top border-secondary border-opacity-25 pt-2">Synapse UI Engine Ready_</code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LOWER LONG-FORM SECTION */}
      <section className="py-5 my-4 border-top border-secondary border-opacity-10">
        <h3 className="display-5 fw-bold text-white mb-4">Technical Specification Ledger</h3>
        <div className="row g-4 text-white-50 small">
          <div className="col-12 col-md-6">
            <h5 className="text-white fw-bold mb-2">Data Processing Engine</h5>
            <p style={{ lineHeight: '1.7' }}>
              The runtime engine runs deep event mapping structures to track user cursor velocity and scroll pacing vectors. This incoming data stream feeds into a layout distribution engine that adjusts padding tokens and font size properties seamlessly without blocking UI re-renders.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="text-white fw-bold mb-2">Style Token Isolation</h5>
            <p style={{ lineHeight: '1.7' }}>
              Style definitions use decoupled, theme-agnostic design variables. This layer interfaces perfectly with React lifecycle states, ensuring components adapt instantly across custom aesthetic profiles while preserving high browser paint speeds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;