 
import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;
  
  const [formData, setFormData] = useState({ 
     
    email: '', 
    phone: '', 
    message: '' 
  });
  const [robotCheck, setRobotCheck] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData({ 
      ...formData, 
      [name]: value
    });
  };

  const handleCheckChange = (e) => {
    setRobotCheck(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!robotCheck) {
      alert(getText('Please confirm you are not a robot.', 'يرجى تأكيد أنك لست روبوتاً.'));
      return;
    }
    
    alert(getText(
        `Thank you for your message! We have received your email. We will call you at ${formData.phone}.`,  
        `شكراً لك على رسالتك! لقد تلقينا بريدك الإلكتروني. سنتصل بك على ${formData.phone}.`
    ));
    setFormData({ email: '', phone: '', message: '' });  
    setRobotCheck(false);
  };

   const isFormValid = formData.email && formData.phone && formData.message && robotCheck; 

  return (
    <div className="page-container contact-page">
      <h2>{getText('Get In Touch', 'تواصل معنا')}</h2>
      <div className="contact-grid">
        <form 
          onSubmit={handleSubmit} 
          className="contact-form"
          style={{ direction: isArabic ? 'rtl' : 'ltr' }} 
        >
           
          <label>
            {getText('Email:', 'البريد الإلكتروني:')}
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            {getText('Phone:', 'الهاتف:')}
            <input 
              type="tel"
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </label>
          
          <label className="message-label">
            {getText('Message:', 'الرسالة:')}
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
          </label>
          
          <label className="robot-check-label">
            <input 
              type="checkbox" 
              checked={robotCheck} 
              onChange={handleCheckChange} 
              required 
            />
            <span>{getText("I'm not a robot", "أنا لست روبوتًا")}</span>
          </label>
          
          <button type="submit" disabled={!isFormValid}>
            {getText('Send Message', 'أرسل الرسالة')}
          </button>
        </form>

        <div className="contact-info">
            <h3>{getText('Our Details', 'تفاصيلنا')}</h3>
            <p><strong>{getText('Email:', 'البريد الإلكتروني:')}</strong> info@medicalportal.com</p>
            <p><strong>{getText('Phone:', 'الهاتف:')}</strong> +1 (555) 123-4567</p>
            <p><strong>{getText('Address:', 'العنوان:')}</strong> 123 Health Blvd, Wellness City</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;