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
          <h3>Diaby</h3>
          <p className="profile-subtitle">Frontend Developer & Siswa PKL</p>
          <p className="profile-description">
            Halo! Saya adalah seorang pengembang web antusias yang berfokus pada pembuatan antarmuka digital yang bersih, terstruktur, dan memiliki interaksi yang mulus. Saat ini saya sedang menjalani pelatihan intensif (PKL) untuk menguasai React, Vite, dan arsitektur web modern.
          </p>
          <div className="profile-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
              <span className="material-symbols-outlined">link</span> GitHub
            </a>
            <a href="mailto:example@email.com" className="social-link">
              <span className="material-symbols-outlined">mail</span> Email
            </a>
          </div>
        </div>

        {/* Card 2: Skills (Staggered layout) */}
        <div className="profile-card skills-card">
          <h3>Keahlian & Teknologi</h3>
          <p className="card-description">
            Beberapa teknologi dan bahasa pemrograman yang saya pelajari dan gunakan dalam proyek:
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
