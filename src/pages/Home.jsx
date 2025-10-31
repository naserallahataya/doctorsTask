import { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import HeroSection from '../components/HeroSection';  
import StatsSection from '../components/StatsSection'; 

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const filtered = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      <HeroSection />  
      <StatsSection />  

      <div className="search-section" id="search">
        <h2>Find Your Specialist</h2>
        <input
          type="text"
          placeholder="Search by name or specialty"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="doctor-list-container">
        <div className="doctor-list">
          {filtered.map(doc => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;