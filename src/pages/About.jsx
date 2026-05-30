import React from 'react';

const About = () => {
  return (
    <div className="container py-4 page-transition">
      {/* Upper Grid Layer */}
      <div className="row g-4 align-items-stretch mb-5">
        <div className="col-12 col-lg-6">
          <div className="custom-bento-card">
            <div>
              <span className="text-uppercase tracking-wider text-info fw-bold small">// Executive Overview</span>
              <h1 className="display-4 fw-bold text-white mt-2 mb-4">Hossam Abu Dawood</h1>
              <p className="lead text-muted">Building digital ecosystems at the intersection of layout structures, design principles, and raw programming logic.</p>
            </div>
            <p className="text-white-50 mt-3 mb-0" style={{ lineHeight: '1.7' }}>
              Unlike a traditional static portfolio, this environment documents the iterative journey of system development. I treat software engineering not as an assembly line, but as an evolving ecosystem where design tokens, component modularity, and algorithmic performance adapt hand-in-hand.
            </p>
          </div>
        </div>
        
        <div className="col-12 col-lg-6">
          <div className="custom-bento-card">
            <div>
              <h3 className="h4 text-white fw-bold mb-3">The Architectural Foundation</h3>
              <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                Every production pipeline starts as what I call a "Seed"—an isolated code snippet, a basic API tracking route, or a skeletal interface component. Through rapid optimization cycles, browser paint profiling, and interface structural tests, it scales into a fully production-ready framework node.
              </p>
              <h3 className="h4 text-white fw-bold mb-3">Immersive Future Focus</h3>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                My current research focuses on low-latency data rendering and the optimization of heavy state objects. By offloading computational parsing from the main browser thread, we can deliver highly fluid web experiences that remain accessible across diverse hardware classes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER LONG-FORM SECTION: The Engineering Execution Blueprint */}
      <section className="py-5 my-4 border-top border-secondary border-opacity-10">
        <div className="mb-5">
          <span className="text-info fw-bold text-uppercase tracking-wider small d-block mb-2">// Operational Pipeline</span>
          <h2 className="display-5 fw-bold text-white">Engineering Methodology Workflow</h2>
          <p className="text-muted">A systemic breakdown of how interactive modules grow from abstract theories into production code.</p>
        </div>

        <div className="row g-4 mt-2">
          {/* Card 1: Electric Cyan */}
          <div className="col-12 col-md-4">
            <div className="p-4 h-100" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '2px solid var(--primary)', borderRadius: '16px' }}>
              <div className="fw-bold mb-2 fs-5" style={{ color: 'var(--primary)' }}>
                01 / Structural Discovery
              </div>
              <p className="text-white-50 small" style={{ lineHeight: '1.7' }}>
                Mapping out data flow models and visual grouping frameworks before writing code. This includes validating component boundaries, isolating global application state managers, and setting up strict performance thresholds.
              </p>
            </div>
          </div>

          {/* Card 2: Radiant Violet */}
          <div className="col-12 col-md-4">
            <div className="p-4 h-100" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '2px solid var(--secondary)', borderRadius: '16px' }}>
              <div className="fw-bold mb-2 fs-5" style={{ color: 'var(--secondary)' }}>
                02 / Component Synthesis
              </div>
              <p className="text-white-50 small" style={{ lineHeight: '1.7' }}>
                Translating semantic layout modules into clean React components. Writing modular, highly reusable code blocks while binding style parameters directly to dynamic system-wide variables.
              </p>
            </div>
          </div>

          {/* Card 3: Neon Emerald */}
          <div className="col-12 col-md-4">
            <div className="p-4 h-100" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '2px solid #34d399', borderRadius: '16px' }}>
              <div className="fw-bold mb-2 fs-5" style={{ color: '#34d399' }}>
                03 / Profiling & Execution
              </div>
              <p className="text-white-50 small" style={{ lineHeight: '1.7' }}>
                Running continuous automated audits to monitor layout shifting, memory leaks, and compilation speeds. Refactoring deep code paths to ensure instant loading times and highly responsive layouts across all viewports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;