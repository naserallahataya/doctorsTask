import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;

  return (
    <div className="page-container about-us-page">
      <h2>{getText('About Our Medical Portal', 'عن بوابتنا الطبية')}</h2>
      <p>{getText(
        'Established in 2023, our mission is to simplify healthcare access by connecting patients with the best medical professionals across various specialties.',
        'تأسست في عام 2023، مهمتنا هي تبسيط الوصول إلى الرعاية الصحية من خلال ربط المرضى بأفضل المهنيين الطبيين في مختلف التخصصات.'
      )}</p>
      <div className="mission-vision">
        <div className="section-card">
            <h3>{getText('Our Mission', 'مهمتنا')}</h3>
            <p>{getText('To provide seamless, reliable, and user-friendly platform for doctor appointments.', 'توفير منصة سلسة وموثوقة وسهلة الاستخدام لمواعيد الأطباء.')}</p>
        </div>
        <div className="section-card">
            <h3>{getText('Our Vision', 'رؤيتنا')}</h3>
            <p>{getText('To be the leading online medical appointment system globally.', 'أن نكون نظام حجز المواعيد الطبية الرائد عبر الإنترنت على مستوى العالم.')}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;