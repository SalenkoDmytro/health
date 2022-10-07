import React from 'react';
import s from './rightSideBar.module.css';

function RightSideBar() {
  return (
    <div className={s.sidebar}>
      <div className={s.summary}>
        <p className={s.summary__title}>Сводка за 20.06.2020</p>
        <ul className={s.summary__list}>
          <li className={s.summary__listItem}>
            <span>Осталось</span>
            <span>000 ккал</span>
          </li>
          <li className={s.summary__listItem}>
            <span>Употреблено</span>
            <span>000 ккал</span>
          </li>
          <li className={s.summary__listItem}>
            <span>Дневная норма</span>
            <span>000 ккал</span>
          </li>
          <li className={s.summary__listItem}>
            <span>n% от нормы</span>
            <span>000 ккал</span>
          </li>
        </ul>
      </div>
      <div className={s.notRecommended}>
        <p className={s.summary__title}>Нерекомендуемые продукты </p>
        <p className={s.summary__subtitle}>
          Здесь будет отображаться ваш рацион
        </p>
      </div>
    </div>
  );
}

export default RightSideBar;
