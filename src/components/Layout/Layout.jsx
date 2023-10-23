import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import { Container } from '../Header/Header.styled';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        {/* <main> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* </main> */}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
