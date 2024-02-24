import { useContext } from 'react';

import { Container } from 'src/atoms/Container';

import { NavContext } from 'src/context/NavContext';

import { main, layout } from './style.module.css';

export const Main = ({ children }) => {
  const { NavHeight } = useContext(NavContext);

  return (
    <main
      className={main}
      style={{
        marginBlockStart: NavHeight,
      }}
    >
      <Container>
        <div className={layout}>{children}</div>
      </Container>
    </main>
  );
};
