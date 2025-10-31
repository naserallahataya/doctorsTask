import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>{getText('Your Health, Our Priority.', 'صحتك أولويتنا.')}</h1>
        <p>{getText(
          'Book appointments with certified doctors instantly. Quality care is just a click away.',
          'احجز مواعيدك مع الأطباء المعتمدين على الفور. الرعاية الصحية عالية الجودة على بعد نقرة واحدة.'
        )}</p>
        <a href="#search" className="hero-button">{getText('Book Now', 'احجز الآن')}</a>
      </div>
      <div className="hero-image">
       </div>
    </div>
  );
};
export default HeroSection;