'use client';
import { useState } from 'react';
import Navbar from './Navbar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar />
    </>
  );
};

export default Navigation;
