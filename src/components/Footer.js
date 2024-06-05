import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="relative pb-16 min-h-screen box-border">
      <footer className="absolute bottom-0 bg-zinc-700 w-full h-20 text-center text-white max-md:h-40">
        <nav className="mt-2 max-md:mt-4">
          <ul className="flex justify-center gap-4">
            <li>
              <a href="/" className="text-3xl">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/" className="text-3xl">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/" className="text-3xl">
                <i className="fa-brands fa-square-threads"></i>
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-2">©Star Up Cafe 2024</p>
      </footer>
    </div>
  );
}

export default Footer;
