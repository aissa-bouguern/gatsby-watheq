import React from 'react';

import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import '../styles/main.css';

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Navigation />
      <div className="sections-container">
        <section className="main-section">{children}</section>
        <section className="side-bar">
          <div className="white-box padding-2">
            <Sidebar />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
