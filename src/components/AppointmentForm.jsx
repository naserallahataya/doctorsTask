import { useState } from 'react';

const AppointmentForm = ({ doctor }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Appointment confirmed with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
  };

  const times = doctor.availableSlots.find(slot => slot.date === selectedDate)?.times || [];

  return (
     <div className="appointment-form-card">
      <h3>Book an Appointment</h3>
      
       <form onSubmit={handleSubmit}>
        <label>Date:
          <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
            <option value="">Select date</option>
            {doctor.availableSlots.map(slot => (
              <option key={slot.date} value={slot.date}>{slot.date}</option>
            ))}
          </select>
        </label>

        {selectedDate && (
          <label>Time:
            <select value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
              <option value="">Select time</option>
              {times.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </label>
        )}

        <button type="submit" disabled={!selectedDate || !selectedTime}>Confirm</button>
      </form>
    </div>
   );
};

export default AppointmentForm;