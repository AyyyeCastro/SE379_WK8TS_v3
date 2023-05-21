import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
