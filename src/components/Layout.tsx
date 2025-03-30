import React from "react";
import "../Global.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="layout__container">{children}</main>;
};

export default Layout;
