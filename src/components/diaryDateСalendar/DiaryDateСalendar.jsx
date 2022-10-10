import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import svg from '../../assets/images/calendar-svg.svg';

const DiaryDateCalendar = () => {
  // const [startDate, setStartDate] = useState(new Date());

  // return (
  //   <div>
  //     <DatePicker
  //       selected={startDate}
  //       dateFormat="dd.MM.yyyy"
  //       onChange={date => setStartDate(date)}
  //     />

  //   </div>
  // );

  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    // <button className="example-custom-input" onClick={onClick} ref={ref}>
    //   Календарик
    // </button>
    <div style={{ display: 'flex', gap: '20px' }}>
      <p>{value}</p>
      <svg
        style={{ width: '20px', height: '20px' }}
        onClick={onClick}
        ref={ref}
      >
        <use href={svg + '#calendar'}></use>
      </svg>
    </div>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DiaryDateCalendar;
