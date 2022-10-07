import React from 'react';
import s from './rightSideBar.module.css';

function RightSideBar() {
  return (
    <div className={s.sidebar}>
      <div className={s.summary}>
        <p className={s.summary__title}> Сводка за 20.06.2020 </p>
        <ul className={s.summary__list}>
          <li className={s.summary__listItem}>
            <span>Осталось</span>
          </li>
          <li className={s.summary__listItem}>
            <span>Употреблено</span>
          </li>
          <li className={s.summary__listItem}>
            <span>Дневная норма</span>
          </li>
          <li className={s.summary__listItem}>
            <span>% от нормы </span> %
          </li>
        </ul>
      </div>
      <div className={s.notRecommended}>
        <p className={s.summary__title}>Food not recommended</p>
      </div>
    </div>
  );
}

export default RightSideBar;
