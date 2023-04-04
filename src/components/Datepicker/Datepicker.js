import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Picker.css";

function MyForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log("Form submitted with date:", selectedDate);
  //   };

  return (
    <>
      <label htmlFor="date-picker">Date de l'intervention ou formation</label>
      <DatePicker
        showPopperArrow={false}
        id="date-picker"
        placeholderText="Sélectionnez une date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
      />
    </>
  );
}

export default MyForm;
