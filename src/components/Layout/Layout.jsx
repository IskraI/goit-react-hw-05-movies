import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Header from '../Header/Header';
const Layout = () => {
  return (
    <main>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
export default Layout;
