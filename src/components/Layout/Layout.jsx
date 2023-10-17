import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import { Container } from '../Header/Header.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
