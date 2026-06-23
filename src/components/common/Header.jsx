import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
      <div className="container-custom">
        {breadcrumbs && (
          <nav className="text-sm text-white/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <span className="mx-2">/</span>
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-white">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-white/80 mt-2">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;