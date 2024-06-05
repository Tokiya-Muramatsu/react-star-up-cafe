import React from "react";
import Logo from "../img/coffe-logo.png";
import { Link } from 'react-router-dom';
import "./css/Header.css";

function Header() {
  return (
      <div>
          <header className="header w-full h-16 flex items-center justify-around bg-neutral-50 max-md:justify-start pl-3">
            <h1 className="text-3xl font-bold">Star Up Cafe</h1>

            <nav className="max-md:hidden">
              <ul className="flex gap-4">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/content">CONTENT</Link>
                </li>
                <li>
                  <a href="/">CONTACT</a>
                </li>
              </ul>
            </nav>
          </header>

          <ul className="nav-ul w-full flex left-0 bottom-0 justify-around fixed items-center bg-neutral-50 z-50 md:hidden">
            <li className="grow text-center px-2.5 py-1">
              <Link to="/">
                <i className="fa-solid fa-house-chimney text-2xl"></i>
                <span className="text-xs">HOME</span>
              </Link>
            </li>
            <li className="grow text-center px-2.5 py-1">
              <Link to="/about">
                <i className="fa-solid fa-store text-2xl"></i>
                <span className="text-xs">ABOUT</span>
              </Link>
            </li>
            <li className="grow text-center px-2.5 py-1">
              <img src={Logo} alt="ロゴ" className="w-16" />
            </li>
            <li className="grow text-center px-2.5 py-1">
              <Link to="/content">
                <i className="fa-solid fa-mug-saucer text-2xl"></i>
                <span className="text-xs">CONTENT</span>
              </Link>
            </li>
            <li className="grow text-center px-2.5 py-1">
              <Link to="/contact">
                <i className="fa-solid fa-envelope text-2xl"></i>
                
                <span className="text-xs">CONTACT</span>
              </Link>
            </li>
          </ul>

      </div>
  );
}

export default Header;
