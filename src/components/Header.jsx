import React from 'react'
import logo from '../assets/investment-calculator-logo.png';

//rfc
export default function Header() {
  return (
    <header id='header'>
      <img src={logo} alt='money bag' />
      <h2>Investment Calculator</h2>
    </header>
  );
}
