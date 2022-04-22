import React from 'react';

// components
import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
