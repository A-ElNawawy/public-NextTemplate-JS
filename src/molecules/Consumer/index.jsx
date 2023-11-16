import { useContext } from 'react';

import { AuthContext } from 'src/context/AuthContext';

import style from './style.module.css';

export const Consumer = () => {
  const { User } = useContext(AuthContext);

  return (
    <div className={style.Consumer}>
      <span>مرحباً بك.. &nbsp;&nbsp; {User?.phone}</span>
    </div>
  );
};
