import React from "react";
import Content from "./Content";
import Header from "./Header";
import "./style.scss";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <Content>{children}</Content>
    </div>
  );
}
