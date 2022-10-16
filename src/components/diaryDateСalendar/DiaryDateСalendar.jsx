import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './diaryDateCalendar.css';
import parseISO from 'date-fns/parseISO';
import { format } from 'date-fns';

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
      selected={parseISO(formatDate)}
      onChange={date => getDate(format(new Date(date), 'yyyy-MM-dd'))}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
      maxDate={parseISO(formatDate)}
    />
  );
};

export default DiaryDateCalendar;
