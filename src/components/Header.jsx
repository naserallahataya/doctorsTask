import { useContext } from 'react';
import { Link } from 'react-router-dom';   
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LanguageContext);

  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;  

  return (
    <header>
      <h1>{getText('Medical Portal', 'بوابة طبية')}</h1>
      <nav>
        <Link to="/">{getText('Home', 'الرئيسية')}</Link>
        <Link to="/about">{getText('About Us', 'عنا')}</Link>
        <Link to="/gallery">{getText('Gallery', 'الصور')}</Link>
        <Link to="/contact">{getText('Contact', 'اتصل بنا')}</Link>
      </nav>
      <div className="header-controls">
        <button onClick={toggleTheme}>{getText('Toggle Theme', 'تبديل السمة')}</button>
        <button onClick={toggleLanguage}>
          {getText('Switch to Arabic', 'التحويل للإنجليزية')}
        </button>
      </div>
    </header>
  );
};

export default Header;