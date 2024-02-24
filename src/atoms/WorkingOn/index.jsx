import { WORKING_ON } from 'src/data/shared';

import { WorkingOnS } from './style.module.css';

export const WorkingOn = ({ pageName = '', massage = '' }) => {
  return (
    <div className={WorkingOnS}>
      <h1>{pageName}</h1>

      <h2>{massage || WORKING_ON}</h2>
    </div>
  );
};
