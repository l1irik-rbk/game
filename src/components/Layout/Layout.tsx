import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default Layout;
