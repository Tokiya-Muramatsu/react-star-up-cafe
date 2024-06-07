import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/menu">MENU</Link>
            </li>
            <li>
              <a href="/recommend">My Recommend</a>
            </li>
          </ul>
        </nav>
      </header>

      <ul className="nav-ul w-full flex left-0 bottom-0 justify-around fixed items-center bg-neutral-50 z-50 md:hidden">
        <li className="grow text-center px-2.5 py-1">
          <Link to="/">
            <i className="fa-solid fa-house-chimney text-2xl"></i>
            <br />
            <span className="text-xs">HOME</span>
          </Link>
        </li>
        <li className="grow text-center px-2.5 py-1">
          <Link to="/about">
            <i className="fa-solid fa-store text-2xl"></i>
            <br />
            <span className="text-xs">ABOUT</span>
          </Link>
        </li>
        <li className="grow text-center px-2.5 py-1">
          <img src="/img/coffe-logo.png" alt="ロゴ" className="w-16 m-auto" />
        </li>
        <li className="grow text-center px-2.5 py-1">
          <Link to="/menu">
            <i className="fa-solid fa-mug-saucer text-2xl"></i>
            <br />
            <span className="text-xs">MENU</span>
          </Link>
        </li>
        <li className="grow text-center px-2.5 py-1">
          <Link to="/recommend">
            <i class="fa-solid fa-crown text-2xl"></i>
            <br />
            <span className="text-xs">My Recommend</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
