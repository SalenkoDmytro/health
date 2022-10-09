import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DiaryDateСalendar(props) {
  const [startDate, setStartDate] = useState(new Date());

  const createDate = date => {
    return { date: date.toISOString().slice(0, 10) };
  };

  return (
    <DatePicker
      selected={startDate}
      dateFormat="dd.MM.yyyy"
      onChange={date => setStartDate(date)}
    />
  );
}

export default DiaryDateСalendar;
