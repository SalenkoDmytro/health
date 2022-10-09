import React from 'react';
import s from './RightSideBar.module.css';

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
          Все бульоны/отвары, жирная рыба, икра и мясо, грибы, крупы (пшено,
          перловая, пшеничная)
        </p>
      </div>
    </div>
  );
}

export default RightSideBar;
