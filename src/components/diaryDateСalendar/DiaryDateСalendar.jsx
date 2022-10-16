import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import parseISO from 'date-fns/parseISO';
import { format } from 'date-fns';
import { Title, Calendar } from './diaryDateCalendar.styled';
import svg from '../../assets/images/calendar-svg.svg';

const DiaryDateCalendar = ({ formatDate, getDate, startDate }) => {
  const CustomInput = forwardRef(({ onClick }, ref) => (
    <Calendar>
      <Title>{startDate}</Title>
      <svg
        style={{ width: '20px', height: '20px' }}
        onClick={onClick}
        ref={ref}
      >
        <use href={svg + '#calendar'}></use>
      </svg>
    </Calendar>
  ));

  return (
    <DatePicker
      selected={parseISO(startDate)}
      onChange={date => getDate(format(new Date(date), 'yyyy-MM-dd'))}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
      maxDate={parseISO(formatDate)}
    />
  );
};

export default DiaryDateCalendar;
