import React from "react";
import { Link } from 'react-router-dom';
import "./menu.scss";

function Menu() {
  return (
    <div>
      <div className="menu-content">
        <div className="menu-title">
          <h3>
            <span>MENU</span>
          </h3>
        </div>

        <div className="menu-wrap">
          <div className="menu">
            <div>
              <img src="./img/menu01.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>コーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu02.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>アイスコーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu03.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>コーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu04.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>コーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu05.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>コーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu06.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>コーヒー</h4>
              <p>300円</p>
              <p>
                ブラジル産の豆を使用した、上品な香りが特徴のコーヒーです。
                一口で広がる豊かな風味をお楽しみください。
              </p>
            </div>
          </div>
        </div>

        <div className="my-20">
          <p className="m-auto text-center">
            <Link to="/menu" className="text-center">
              <span className="text-xl py-6 px-20 bg-lime-200 rounded-full hover:bg-lime-500">
                VIEW MORE <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
