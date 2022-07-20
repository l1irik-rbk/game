import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = (): JSX.Element => {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default Layout;
