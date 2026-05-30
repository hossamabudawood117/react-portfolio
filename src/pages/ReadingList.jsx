import React, { useState, useEffect } from 'react';

const ReadingList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // LocalStorage initialization
  const [savedBooks, setSavedBooks] = useState(() => {
    const localData = localStorage.getItem('userSavedBooks');
    return localData ? JSON.parse(localData) : [];
  });

  // LocalStorage sync
  useEffect(() => {
    localStorage.setItem('userSavedBooks', JSON.stringify(savedBooks));
  }, [savedBooks]);

  // Expanded to 8 Resources with colored difficulty tagging
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", category: "Systems & Automation", review: "Crucial for configuring continuous optimization routines.", difficulty: "Beginner" },
    { id: 2, title: "Design of Everyday Things", author: "Don Norman", category: "UX Architecture", review: "Understanding mental models and user interaction constraints.", difficulty: "Intermediate" },
    { id: 3, title: "Refactoring UI", author: "Adam Wathan", category: "Visual Layouts", review: "Practical guidelines for engineering clean visual hierarchies.", difficulty: "Beginner" },
    { id: 4, title: "Clean Code", author: "Robert C. Martin", category: "Logic & Quality", review: "The bible for maintaining readable, scalable codebase architectures.", difficulty: "Advanced" },
    { id: 5, title: "You Don't Know JS Yet", author: "Kyle Simpson", category: "Logic & Quality", review: "Deep dive into asynchronous mechanics and compiling runtimes.", difficulty: "Advanced" },
    { id: 6, title: "Don't Make Me Think", author: "Steve Krug", category: "UX Architecture", review: "Frictionless human-computer interaction patterns.", difficulty: "Intermediate" },
    { id: 7, title: "The Pragmatic Programmer", author: "David Thomas", category: "Systems & Automation", review: "Mastering the philosophical mindset required for professional software engineering.", difficulty: "Intermediate" },
    { id: 8, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Logic & Quality", review: "A comprehensive guide to understanding advanced object-oriented structures.", difficulty: "Advanced" }
  ];

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSave = (bookId) => {
    if (savedBooks.includes(bookId)) {
      setSavedBooks(savedBooks.filter(id => id !== bookId));
    } else {
      setSavedBooks([...savedBooks, bookId]);
    }
  };

  return (
    <div className="container py-4 page-transition">
      {/* Search Header */}
      <div className="row mb-5 align-items-end g-4">
        <div className="col-12 col-md-7">
          <span className="badge rounded-pill px-3 py-2 mb-3">Knowledge Repository</span>
          <h1 className="display-4 fw-bold text-white mb-2">The Architectural Library</h1>
          <p className="lead text-muted mb-0">Searching theoretical foundations and code execution manuals shaping system workflows.</p>
        </div>
        <div className="col-12 col-md-5">
          <div className="position-relative">
            <input type="text" className="form-control custom-input" placeholder="Search resources..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {searchTerm && <button onClick={() => setSearchTerm('')} className="btn btn-sm position-absolute end-0 top-50 translate-middle-y text-muted me-2 border-0 bg-transparent">✕</button>}
          </div>
        </div>
      </div>

      {/* Dynamic Grid of 8 Books */}
      <div className="mb-5">
        {filteredBooks.length > 0 ? (
          <div className="row g-4">
            {filteredBooks.map((book) => {
              const isSaved = savedBooks.includes(book.id);
              return (
                <div className="col-12 col-md-6 col-lg-4" key={book.id}>
                  <div className="custom-bento-card d-flex flex-column h-100 justify-content-between" style={{ border: isSaved ? '1px solid var(--primary)' : '' }}>
                    <div>
                      
                      {/* Top Row: Category, Save Button, and Difficulty */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex gap-2 align-items-center">
                          <span className="badge">{book.category}</span>
                          <small 
                            className="fw-bold tracking-wider" 
                            style={{ color: book.difficulty === 'Advanced' ? '#ef4444' : book.difficulty === 'Intermediate' ? '#f59e0b' : '#10b981' }}
                          >
                            {book.difficulty}
                          </small>
                        </div>
                      </div>
                      
                      <h4 className="fw-bold text-white mb-1">{book.title}</h4>
                      <p className="text-muted small mb-3">Written by {book.author}</p>
                      <p className="text-white-50 small font-italic" style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '10px' }}>"{book.review}"</p>
                    </div>

                    {/* LocalStorage Save Button */}
                    <button 
                        onClick={() => toggleSave(book.id)} 
                        className="btn w-100 mt-3"
                        style={{ background: isSaved ? 'var(--primary)' : 'rgba(255,255,255,0.05)', color: isSaved ? '#000' : '#fff', transition: '0.3s' }}
                      >
                        {isSaved ? '★ Resource Saved' : '☆ Save to Storage'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-5 custom-bento-card">
            <h4 className="text-white mb-0">Zero Modules Found matching current filter parameters.</h4>
          </div>
        )}
      </div>

      {/* LONG-FORM SECTION: Literary Influence */}
      <section className="py-5 my-4 border-top border-secondary border-opacity-10">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <h3 className="display-5 fw-bold text-white mb-4">Literary Influence on Code Synthesis</h3>
            <div className="text-white-50" style={{ lineHeight: '1.8', fontSize: '1.05rem', fontWeight: '300' }}>
              <p className="mb-4">
                Great software development reaches far beyond understanding language definitions and syntax maps—it relies on mastering system habits, human intuition patterns, and robust information structures. By synthesizing core principles from human-computer interface design, we create software ecosystems that feel naturally intuitive rather than mechanically complex.
              </p>
              <p className="mb-0">
                This active study ledger works to cross-examine abstract cognitive design rules against modern coding frameworks. The primary goal is to ensure that component dependencies, UI state machines, and view layouts map directly to how users think and navigate naturally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadingList;