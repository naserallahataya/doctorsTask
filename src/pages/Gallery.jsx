import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;

  const images = [
    { src: '/images/clinic_1.jpg', alt: 'Modern Clinic Lobby', ar_alt: 'ردهة عيادة حديثة' },
    { src: '/images/doctor_team.jpg', alt: 'Our Doctor Team', ar_alt: 'فريق الأطباء لدينا' },
    { src: '/images/equipment.jpg', alt: 'Advanced Equipment', ar_alt: 'معدات متقدمة' },
    { src: '/images/reception.jpg', alt: 'Friendly Reception', ar_alt: 'استقبال ودود' },
  ];
 
  return (
    <div className="page-container gallery-page">
      <h2>{getText('Our Facilities & Team', 'مرافقنا وفريقنا')}</h2>
      <p>{getText('Take a visual tour of our state-of-the-art facilities and meet our dedicated team.', 'قم بجولة بصرية في مرافقنا الحديثة وتعرف على فريقنا المتفاني.')}</p>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img 
                src={img.src} 
                alt={isArabic ? img.ar_alt : img.alt} 
            />
            <p className="caption">{isArabic ? img.ar_alt : img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;