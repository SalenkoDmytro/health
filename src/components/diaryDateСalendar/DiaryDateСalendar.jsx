import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import svg from '../../assets/images/calendar-svg.svg';

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        onChange={date => setStartDate(date)}
      />
      <svg>
        <use href={svg + '#calendar'}></use>
      </svg>
    </div>
  );
};

export default DiaryDateCalendar;
