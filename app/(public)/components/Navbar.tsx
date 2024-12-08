"use client";
import React, { useState, useRef } from "react";
import "../../styles/navbar.css"; // Assuming you have this CSS file
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false); // Menu toggle state
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for mobile menu
  const toggleButtonRef = useRef<HTMLDivElement>(null); // Ref for the toggle button

  // Toggle menu function
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);

    if (mobileMenuRef.current && toggleButtonRef.current) {
      mobileMenuRef.current.classList.toggle("show");
      toggleButtonRef.current.classList.toggle("active");
      toggleButtonRef.current.innerHTML =
        toggleButtonRef.current.classList.contains("active") ? "✕" : "☰";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mahad Ahmed</div>
      <div className="navbar-toggle" onClick={toggleMenu} ref={toggleButtonRef}>
        ☰
      </div>

      <div className="navbar-menu">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <div className="dropdown">
          <Link href="#">Join</Link>
          <div className="dropdown-content">
            <Link href="/Login">Log In</Link>
            <Link href="/Signup">Sign Up</Link>
          </div>
        </div>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-menu-mobile" id="mobileMenu" ref={mobileMenuRef}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="/Login">Log In</Link>
        <Link href="/Signup">Sign Up</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
