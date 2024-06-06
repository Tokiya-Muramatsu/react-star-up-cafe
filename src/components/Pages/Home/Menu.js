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
              <p>250円</p>
              <p>
              上品な香りとすっきりとした飲みごたえが特徴です。
              暑い日にぴったりの一杯をお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu03.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>カプチーノ</h4>
              <p>350円</p>
              <p>
              濃厚なエスプレッソとふわふわのスチームミルクが織りなす至福の一杯。
              カプチーノで贅沢なカフェタイムをお楽しみください。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu04.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>ショートケーキ</h4>
              <p>450円</p>
              <p>
              甘酸っぱいイチゴとふわふわスポンジが絶妙にマッチしたストロベリーショートケーキ。
              クリーミーな生クリームがたっぷり乗った、幸せなひとときをお届けします。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu05.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>チョコレートケーキ</h4>
              <p>500円</p>
              <p>
              濃厚でしっとりとしたチョコレートケーキ。
              上質なカカオの風味ととろける食感が絶妙にマッチ。
              贅沢なひとときをお届けします。
              </p>
            </div>
          </div>

          <div className="menu">
            <div>
              <img src="./img/menu06.jpg" alt="" />
            </div>
            <div className="text-box">
              <h4>シュークリーム</h4>
              <p>330円</p>
              <p>
              外はサクサク、中はとろけるようなカスタードクリームがたっぷり詰まったシュークリーム。
              一口で幸せ広がる絶品スイーツです。
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
