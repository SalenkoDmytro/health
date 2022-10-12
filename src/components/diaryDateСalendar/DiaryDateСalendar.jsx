import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './diaryDateCalendar.module.css';

import svg from '../../assets/images/calendar-svg.svg';

const DiaryDateCalendar = ({ getDate, startDate }) => {
  // const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={s.Calendar}>
      <p className={s.Date}>{value}</p>
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
      onChange={date => getDate(date)}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DiaryDateCalendar;
