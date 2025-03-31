import React from 'react';
import '@/global.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="layout__container">{children}</main>;
};

export default Layout;
