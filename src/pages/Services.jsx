import React, { useState } from 'react';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const capabilities = [
    { name: "Frontend Development", category: "Core", desc: "Crafting component-driven interfaces with custom structural safety systems.", metric: "98% Efficiency", icon: "⚡" },
    { name: "Responsive Engineering", category: "Layout", desc: "Delivering fluid grid fields matching widescreen displays down to mobile viewports.", metric: "100% Mobile Score", icon: "📱" },
    { name: "Interaction Mechanics", category: "Motion", desc: "Applying layout motion vectors, custom transitions, and advanced keyframe easing properties.", metric: "60fps Render Rate", icon: "✨" },
    { name: "System Optimization", category: "Core", desc: "Writing accessible, semantic structure paths optimized for rapid compilation and SEO output.", metric: "99 Performance Index", icon: "🚀" },
    { name: "State Architecture", category: "Logic", desc: "Managing global application contexts, asynchronous side-effects, and client-side memory spaces.", metric: "0ms Memory Leaks", icon: "🧠" },
    { name: "UI Framework Design", category: "Layout", desc: "Developing scalable design systems with reusable token schemas and highly accessible bento modular frames.", metric: "100% Atomic Coverage", icon: "🎨" }
  ];

  const filteredItems = filter === 'All' ? capabilities : capabilities.filter(item => item.category === filter);

  return (
    <div className="container py-4 page-transition">
      {/* Header Layer */}
      <div className="text-center mb-5">
        <span className="badge rounded-pill px-3 py-2 mb-3">Enterprise Operations</span>
        <h1 className="display-4 fw-bold text-white">Advanced System Capabilities</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '650px' }}>
          An analytical overview of engineered interface methodologies and interactive computational products.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
          {['All', 'Core', 'Layout', 'Motion', 'Logic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn px-4 py-2 border-0 fw-bold"
              style={{
                borderRadius: '12px',
                background: filter === cat ? 'linear-gradient(135deg, #06b6d4, #8b5cf6)' : 'rgba(255,255,255,0.05)',
                color: filter === cat ? '#030712' : '#94a3b8',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layer */}
      <div className="row g-4 mb-5">
        {filteredItems.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="custom-bento-card" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="fs-1">{item.icon}</div>
                  <span className="badge px-2 py-1 small" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{item.name}</h4>
                <p className="text-muted small mb-4">{item.desc}</p>
              </div>

              <div className="w-100 pt-3 border-top border-secondary border-opacity-25 mt-auto">
                <div className="d-flex justify-content-between text-muted small mb-1">
                  <span>Engine Diagnostic</span>
                  <span className="text-info fw-bold">{item.metric}</span>
                </div>
                <div className="bar-container my-1" style={{ height: '4px' }}>
                  <div className="bar" style={{ width: hoveredIndex === index ? '100%' : '35%', transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOWER LONG-FORM SECTION: Infrastructure Parameters Matrix */}
      <section className="py-5 my-5 border-top border-secondary border-opacity-10">
        <h2 className="display-5 fw-bold text-white mb-4">Infrastructure & Performance Standards</h2>
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.05)' }}>
            <thead>
              <tr className="text-info small tracking-wider text-uppercase">
                <th style={{ background: 'transparent' }}>Operational Track</th>
                <th style={{ background: 'transparent' }}>Target Benchmark</th>
                <th style={{ background: 'transparent' }}>Status Verification</th>
              </tr>
            </thead>
            <tbody className="text-white-50 small">
              <tr>
                <td className="fw-bold text-white" style={{ background: 'transparent' }}>Initial Page Paint Optimization</td>
                <td style={{ background: 'transparent' }}>Sub-0.4 Seconds Engine Handshake</td>
                <td style={{ background: 'transparent' }}><span className="text-success">● OPTIMIZED</span></td>
              </tr>
              <tr>
                <td className="fw-bold text-white" style={{ background: 'transparent' }}>Cross-Device Layout Validation</td>
                <td style={{ background: 'transparent' }}>Fluid 320px to 3840px Breakpoint Scale</td>
                <td style={{ background: 'transparent' }}><span className="text-success">● PASSING</span></td>
              </tr>
              <tr>
                <td className="fw-bold text-white" style={{ background: 'transparent' }}>Asynchronous State Security</td>
                <td style={{ background: 'transparent' }}>Zero Thread Blocking during Deep Queries</td>
                <td style={{ background: 'transparent' }}><span className="text-info">● ACTIVE MONITORING</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Services;