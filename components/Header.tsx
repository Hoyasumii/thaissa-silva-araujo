"use client";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import "./Header.style.scss";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return <Layout.Header className={`content__header ${scrolled && "active"}`}>{children}</Layout.Header>;
};
