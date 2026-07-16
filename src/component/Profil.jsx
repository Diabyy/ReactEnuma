import React from 'react';

export default function Profil() {
  const skills = [
    { name: 'React.js', level: 'Intermediate', icon: 'deployed_code' },
    { name: 'JavaScript', level: 'Advanced', icon: 'javascript' },
    { name: 'HTML & CSS', level: 'Advanced', icon: 'css' },
    { name: 'Git & GitHub', level: 'Intermediate', icon: 'source' },
    { name: 'Responsive Design', level: 'Advanced', icon: 'devices' },
  ];

  return (
    <div className="section-container profile-section">
      <div className="section-header">
        <span className="section-eyebrow">SIAPA SAYA</span>
        <h2 className="section-title">Profil Saya</h2>
      </div>

      <div className="profile-grid">
        {/* Card 1: Bio (Large, Asymmetric) */}
        <div className="profile-card bio-card">
          <div className="profile-avatar">
            <span className="material-symbols-outlined">person_outline</span>
          </div>
          <h3>Adib Diabi</h3>
          <p className="profile-subtitle">Software Engineering Student & Developer</p>
          <p className="profile-description">
            Saya adalah siswa SMK jurusan Pengembangan Perangkat Lunak dan GIM (PPLG) yang berfokus pada rekayasa perangkat lunak dan pengembangan Front-End. Saya berfokus pada penciptaan solusi digital yang inovatif, bersih, dan siap diimplementasikan untuk kebutuhan nyata.
          </p>
          
          <blockquote className="profile-quote-pill" style={{
            margin: '0 0 28px 0',
            padding: '12px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: '0 8px 8px 0',
            fontSize: '14px',
            fontStyle: 'italic'
          }}>
            “ Leveraging AI as a professional tool, not a replacement. ”
          </blockquote>

          <div className="profile-social" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <a href="https://github.com/Diabyy" target="_blank" rel="noreferrer" className="social-link">
              <span className="material-symbols-outlined">link</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/adib-diabi" target="_blank" rel="noreferrer" className="social-link">
              <span className="material-symbols-outlined">work</span> LinkedIn
            </a>
            <a href="https://www.instagram.com/diaycod.x/" target="_blank" rel="noreferrer" className="social-link">
              <span className="material-symbols-outlined">photo_camera</span> Instagram
            </a>
          </div>
        </div>

        {/* Card 2: Skills (Staggered layout) */}
        <div className="profile-card skills-card">
          <h3>Keahlian & Teknologi</h3>
          <p className="card-description">
            Beberapa teknologi dan bahasa pemrograman yang saya gunakan dalam pengerjaan proyek:
          </p>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div 
                className="skill-item" 
                key={skill.name}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <span className="material-symbols-outlined skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
