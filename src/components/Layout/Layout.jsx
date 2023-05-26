import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Header from '../Header/Header';
const Layout = () => {
  return (
    <main>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </main>
  );
};
export default Layout;
