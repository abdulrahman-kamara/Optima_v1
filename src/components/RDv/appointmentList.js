import React, { useState } from 'react';
import './appointmentList.css'; // Import custom CSS file for styling

const AdherentAppointmentForm = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openingHour = 9; // 9 AM
  const closingHour = 18; // 6 PM
  const appointmentInterval = 30; // 30 minutes interval

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleSelectDateTime = (dateTime) => {
    console.log("date", dateTime);
    setSelectedDateTime(dateTime);
    toggleModal();
  };

  const renderDropdown = () => {
    const hours = [];
    for (let hour = openingHour; hour < closingHour; hour++) {
      for (let minute = 0; minute < 60; minute += appointmentInterval) {
        const dateTime = new Date(selectedDateTime);
        dateTime.setHours(hour);
        dateTime.setMinutes(minute);
        hours.push(
          <button
            key={`${hour}-${minute}`}
            onClick={() => handleSelectDateTime(dateTime)}
            className={selectedDateTime && selectedDateTime.getHours() === hour && selectedDateTime.getMinutes() === minute ? 'selected' : ''}
          >
            {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
          </button>
        );
      }
    }
    return hours;
  };

  const formatDate = (dateTime) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return dateTime.toLocaleDateString('en-US', options);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    now.setMinutes(0); // Set minutes to 0 to align with the appointment interval
    return now;
  };

  const getNextWorkingDay = (dateTime) => {
    const nextDay = new Date(dateTime);
    nextDay.setDate(nextDay.getDate() + 1);
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return nextDay;
  };
  const handleConfirmAppointment = () => {
    // Handle the appointment confirmation logic here
  
    // Close the modal after handling the confirmation
    setModalOpen(false);
  };
  return (
    <div className="company-appointment-form">
      <h2>Choose Appointment Date and Time</h2>
      <div className="date-dropdown">
        <button
          className={`date-button${selectedDateTime ? ' selected' : ''}`}
          onClick={toggleDropdown}
        >
          {selectedDateTime
            ? `${formatDate(selectedDateTime)}, ${String(selectedDateTime.getHours()).padStart(2, '0')}:${String(selectedDateTime.getMinutes()).padStart(2, '0')}`
            : 'Select a date and time'}
        </button>
        {isDropdownOpen && (
          <div className="time-dropdown">
            {selectedDateTime && renderDropdown()}
          </div>
        )}
      </div>
      <div className="next-days">
        {[...Array(10)].map((_, index) => {
          const dateTime = getNextWorkingDay(new Date());
          dateTime.setDate(dateTime.getDate() + index);
          return (
            <button
              key={index}
              onClick={() => handleSelectDateTime(dateTime)}
              className={`day-button${selectedDateTime && selectedDateTime.toDateString() === dateTime.toDateString() ? ' selected' : ''}`}
              style={{ display: dateTime.getDay() === 0 || dateTime.getDay() === 6 ? 'none' : 'block' }}
            >
              {formatDate(dateTime)}
            </button>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Opening Hours</h3>
            <p>Selected Date:</p>
            <p>{selectedDateTime && formatDate(selectedDateTime)}</p>
            <p>Opening Hours:</p>
            <p>
              Monday to Friday: {openingHour}:00 AM - {closingHour}:00 PM
            </p>
            <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdherentAppointmentForm;
