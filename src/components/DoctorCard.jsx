import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => (
  <div className="card">
    <img src={doctor.photo} alt={doctor.name} />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialty}</p>
    <p>{doctor.location}</p>
    <Link to={`/doctor/${doctor.id}`}>View Details</Link>
  </div>
);

export default DoctorCard;
