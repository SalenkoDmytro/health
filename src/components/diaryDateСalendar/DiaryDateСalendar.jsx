import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './diaryDateCalendar.css';

import svg from '../../assets/images/calendar-svg.svg';

const DiaryDateCalendar = ({ formatDate, getDate, startDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="Calendar">
      <p className="Date">{value}</p>
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
      //!!!!!!!!!!!!!!!!!!Змінити формат дати */
      //З цими параметрами календар не працює
      // selected={formatDate}
      //!!!!!!!!!!!!!!!!!!Змінити формат дати */
      // onChange={date => getDate(date)}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
      maxDate={formatDate}
    />
  );
};

export default DiaryDateCalendar;
