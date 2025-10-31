import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const StatsSection = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;

  const stats = [
    { number: '50+', label: 'Specialties', ar_label: 'تخصصات' },
    { number: '1,200+', label: 'Patients Treated', ar_label: 'مرضى عولجوا' },
    { number: '98%', label: 'Positive Feedback', ar_label: 'ردود فعل إيجابية' },
    { number: '24/7', label: 'Support', ar_label: 'دعم' },
  ];

  return (
    <div className="stats-section">
      <h3>{getText('Our Success in Numbers', 'نجاحنا بالأرقام')}</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{isArabic ? stat.ar_label : stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatsSection;