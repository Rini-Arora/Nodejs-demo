import React from 'react';
import './Layout.css'; // Import CSS for common styles

const Layout = ({ children }) => {
    return (
      <div className="layout">
        {children}
      </div>
    );
  };

export default Layout;