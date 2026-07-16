import React from 'react';

export default function About() {
  const points = [
    { title: 'Pemrograman Modern', desc: 'Mempelajari React 19, Vite, state management, dan optimasi performa web.', icon: 'code' },
    { title: 'Standar Industri', desc: 'Menerapkan alur kerja profesional dengan Git, modularisasi kode, dan clean code.', icon: 'verified_user' },
    { title: 'Mentoring Intensif', desc: 'Bimbingan berkala dari instruktur berpengalaman untuk memecahkan studi kasus riil.', icon: 'forum' },
  ];

  const reviews = [
    {
      name: 'Deni Prasetyo',
      role: 'Lead Developer & Mentor PKL',
      comment: 'Diaby memiliki semangat belajar yang luar biasa selama magang di Enuma. Kemampuannya memahami arsitektur React berkembang sangat pesat dari hari ke hari.',
      rating: 5,
    },
    {
      name: 'Siti Rahmawati',
      role: 'Project Manager',
      comment: 'Kolaborasi yang sangat baik dalam pengerjaan projek tim. Diaby sangat responsif terhadap masukan desain dan pengerjaannya selalu rapi.',
      rating: 5,
    },
  ];

  return (
    <div className="section-container about-section">
      <div className="section-header">
        <span className="section-eyebrow">TENTANG PKL</span>
        <h2 className="section-title">Tempat Pelatihan</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: Big Statement / Quote (Asymmetric size) */}
        <div className="about-hero-card">
          <div className="quote-mark">“</div>
          <p className="about-quote">
            Menjalani Praktek Kerja Lapangan (PKL) di **Enuma** memberikan ruang kolaboratif yang luar biasa untuk melompat dari pemahaman teori dasar ke dunia pengembangan perangkat lunak yang sesungguhnya.
          </p>
          <div className="about-institution">
            <span className="material-symbols-outlined inst-icon">apartment</span>
            <div>
              <h4>Enuma Training & Development</h4>
              <p>Program Praktek Kerja Lapangan (PKL) & Magang</p>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed timeline/points */}
        <div className="about-details-card">
          <h3>Fokus Pembelajaran & Pelatihan</h3>
          <p className="card-subtitle">
            Selama program PKL berlangsung, saya berfokus pada pilar-pilar penting ini:
          </p>
          <div className="about-points">
            {points.map((point, index) => (
              <div 
                className="about-point-item" 
                key={point.title}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="point-icon-wrapper">
                  <span className="material-symbols-outlined">{point.icon}</span>
                </div>
                <div className="point-content">
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews/Testimonials Section */}
      <div className="about-reviews-section">
        <h3 className="reviews-title">
          <span className="material-symbols-outlined reviews-icon">rate_review</span> Ulasan & Umpan Balik Mentor
        </h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              className="review-card" 
              key={review.name}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span className="material-symbols-outlined star-icon" key={i}>star</span>
                ))}
              </div>
              <p className="review-text">"{review.comment}"</p>
              <div className="review-author">
                <span className="material-symbols-outlined author-avatar">account_circle</span>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
