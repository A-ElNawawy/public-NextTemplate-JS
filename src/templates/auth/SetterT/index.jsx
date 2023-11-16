import { useContext, useState } from 'react';

import { Consumer } from 'src/molecules/Consumer';

import { AuthContext } from 'src/context/AuthContext';

import style from './style.module.css';

export const SetterT = () => {
  const { setUser } = useContext(AuthContext);

  const [getPhone, setGetPhone] = useState('');
  const [getPassword, setGetPassword] = useState('');

  function handleData(e) {
    e.preventDefault();

    let userData = {
      phone: getPhone,
      password: getPassword,
    };

    setUser(userData);
  }

  const formPhone = (
    <div className={style.FormPhone}>
      <label className={style.formLabel}>
        رقم الهاتف : <sup className={style.redStar}> *</sup>
      </label>

      <div className={style.formPhoneInput}>
        <input
          type='text'
          placeholder='أدخل رقم الهاتف ...'
          className={style.formPhoneInputField}
          onChange={e => setGetPhone(e.target.value)}
          value={getPhone}
        />
      </div>
    </div>
  );

  const FormPassword = (
    <div className={style.FormPassword}>
      <label className={style.formLabel}>
        كلمة السر : <sup className={style.redStar}> *</sup>
      </label>
      <div className={style.formPasswordInput}>
        <input
          type='password'
          placeholder='أدخل كلمة السر الخاصة بك ...'
          className={style.formPasswordInputField}
          onChange={e => setGetPassword(e.target.value)}
          value={getPassword}
        />
      </div>
    </div>
  );

  const registerBtn = <button className={style.registerBtn}> دخول</button>;

  return (
    <div className={style.centerModal}>
      <div className={style.SetterT}>
        <h1 className={style.header}>تسجيل الدخول</h1>
        <form
          className={style.RegisterForm}
          onSubmit={e => handleData(e)}
        >
          {formPhone}

          {FormPassword}

          {registerBtn}
        </form>

        <Consumer />
      </div>
    </div>
  );
};
