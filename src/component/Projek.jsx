import React from 'react';

export default function Projek() {
  const collaborationProjects = [
    {
      title: 'Interactive Flat Panel',
      description: 'Proyek kolaborasi platform edukasi interaktif (EduPanel) untuk mendukung kegiatan pembelajaran digital modern.',
      tech: ['React', 'Vite', 'Edu-Tech'],
      icon: 'tablet_mac',
      demo: 'https://edu-panel-jet.vercel.app/',
      github: 'https://github.com/DiaztMF/EduPanel',
    },
    {
      title: 'LapakKilat',
      description: 'Platform e-commerce kilat dengan transaksi cepat, antarmuka responsif, dan alur belanja yang mulus.',
      tech: ['React', 'Tailwind', 'E-Commerce'],
      icon: 'electric_bolt',
      demo: 'https://lapak-kilat.vercel.app/',
      github: null,
    },
    {
      title: 'LabMaya',
      description: 'Simulasi laboratorium virtual untuk melakukan eksperimen sains secara interaktif dan aman langsung dari browser.',
      tech: ['React', 'WebGL', 'Simulation'],
      icon: 'science',
      demo: 'https://lab-maya.vercel.app/',
      github: 'https://github.com/Diabyy/LabMaya.git',
    },
  ];

  const personalProjects = [
    {
      title: 'My Portfolio',
      description: 'Situs web portofolio pribadi interaktif untuk menampilkan keahlian, perjalanan karier, dan hasil pelatihan PKL.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      icon: 'badge',
      demo: 'https://diaby.vercel.app/',
      github: 'https://github.com/Diabyy/PortofolioDiaby--Enuma.git',
    },
    {
      title: 'FileVault',
      description: 'Aplikasi penyimpanan berkas berbasis cloud (AppsStorageFile) yang aman untuk manajemen dokumen personal.',
      tech: ['React', 'Firebase', 'Cloud Storage'],
      icon: 'cloud_upload',
      demo: 'https://apps-storage-file.vercel.app/',
      github: 'https://github.com/Diabyy/AppsStorageFile.git',
    },
  ];

  const renderProjectCard = (project, index) => (
    <div 
      className="project-card"
      key={project.title}
      style={{ animationDelay: `${(index + 1) * 0.15}s` }}
    >
      <div className="project-card-header">
        <span className="material-symbols-outlined project-icon">{project.icon}</span>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" title="Repository GitHub" className="project-icon-link">
              <span className="material-symbols-outlined">code</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" className="project-icon-link">
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          )}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span className="tech-badge" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="section-container projects-section">
      <div className="section-header">
        <span className="section-eyebrow">PORTFOLIO</span>
        <h2 className="section-title">Projek Saya</h2>
      </div>

      <div className="projects-category-group">
        <h3 className="projects-group-title">
          <span className="material-symbols-outlined group-icon">group</span> Collaboration Projects
        </h3>
        <div className="projects-grid">
          {collaborationProjects.map((p, idx) => renderProjectCard(p, idx))}
        </div>
      </div>

      <div className="projects-category-group">
        <h3 className="projects-group-title">
          <span className="material-symbols-outlined group-icon">person</span> Personal Projects
        </h3>
        <div className="projects-grid">
          {personalProjects.map((p, idx) => renderProjectCard(p, idx))}
        </div>
      </div>
    </div>
  );
}
