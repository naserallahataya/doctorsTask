import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import AppointmentForm from '../components/AppointmentForm';

 const MOCK_DOCTOR_DATA = {
    bio: "Dr. Smith is a highly experienced general practitioner with a focus on preventative care and chronic disease management. They have a passion for patient-centered medicine and have been recognized for their compassionate approach. Dr. Smith is dedicated to ongoing professional development to bring the latest medical insights to their patients.",
    rating: 4.6,
    reviewCount: 215,
    certifications: [
        "Board Certified in Internal Medicine (ABIM)",
        "Advanced Life Support Certification (ACLS)",
        "Award for Excellence in Patient Care (2022)"
    ],
    reviews: [
        { id: 101, patient: "Amal K.", text: "The best doctor I've ever had. Very attentive and knowledgeable.", rating: 5 },
        { id: 102, patient: "Omar H.", text: "Appointment was timely, and I felt heard regarding my concerns.", rating: 4 },
        { id: 103, patient: "Layla Z.", text: "Excellent follow-up care and clear explanations.", rating: 5 }
    ]
};

const DoctorPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const { language } = useContext(LanguageContext);
  
  const isArabic = language === 'ar';
  const getText = (en, ar) => isArabic ? ar : en;

  useEffect(() => {
     fetch('/doctors.json')
      .then(res => res.json())
      .then(data => {
        const foundDoctor = data.find(d => d.id === parseInt(id));
        
         if (foundDoctor) {
            setDoctor({ 
                ...foundDoctor, 
                ...MOCK_DOCTOR_DATA  
            });
        }
      });
  }, [id]);

  if (!doctor) {
    return <div className="page-container">
        <h2>{getText('Loading...', 'جاري التحميل...')}</h2>
    </div>;
  }
  
   const renderRating = (rating) => {
    const stars = '⭐️'.repeat(Math.round(rating));
    const emptyStars = '☆'.repeat(5 - Math.round(rating));
    return `${stars}${emptyStars} (${rating})`;
  };

  return (
    <div className="page-container doctor-page">
      <div className="doctor-page-details">
        
        <h2>{getText(`Dr. ${doctor.name}`, `د. ${doctor.name}`)}</h2>
        <p className="specialty-detail">{getText(doctor.specialty, doctor.specialty_ar || doctor.specialty)}</p>

         <div className="doctor-stats-bar">
            <p>
                <strong>{getText('Rating:', 'التقييم:')}</strong> 
                {renderRating(doctor.rating)} 
            </p>
            <p>
                <strong>{getText('Reviews:', 'المراجعات:')}</strong> 
                {doctor.reviewCount}
            </p>
        </div>

         <div className="doctor-section">
            <h3>{getText('Biography', 'السيرة الذاتية')}</h3>
            <p>{doctor.bio}</p>
        </div>

         <div className="doctor-section">
            <h3>{getText('Certifications & Awards', 'الشهادات والجوائز')}</h3>
            <ul>
                {doctor.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </div>
        
         <div className="doctor-section reviews-section">
            <h3>{getText('Patient Reviews', 'مراجعات المرضى')}</h3>
            {doctor.reviews.map(review => (
                <div key={review.id} className="review-item">
                    <p className="review-text">"{review.text}"</p>
                    <p className="review-meta">
                        - {review.patient} ({renderRating(review.rating)})
                    </p>
                </div>
            ))}
            {doctor.reviews.length === 0 && <p>{getText('No reviews yet.', 'لا توجد مراجعات بعد.')}</p>}
        </div>

         <div className="appointment-container">
            <h3>{getText('Book Your Appointment', 'احجز موعدك')}</h3>
            <AppointmentForm doctor={doctor} />
        </div>
        
      </div>
    </div>
  );
};

export default DoctorPage;