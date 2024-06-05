import React from "react";
import "./style.css";
import TopImg from "../../../img/top-main.jpg";
import AboutCoffee from "../../../img/about-coffe.jpg";
import AboutDessert from "../../../img/about-dessert.jpg";
import { Link } from 'react-router-dom';

// スライダー
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// スライダー専用画像
import Slide01 from "../../../img/cake-1284548_640.jpg";
import Slide02 from "../../../img/ai-generated-8770644_640.png";
import Slide03 from "../../../img/cake-1850011_640.jpg";
import Slide04 from "../../../img/coffee-2605196_640.jpg";
import Slide05 from "../../../img/cake-1971552_640.jpg";
import Slide06 from "../../../img/coffee-563797_640.jpg";


function index() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      <main>
        <div className="">
          <img src={TopImg} alt="" className="h-full" />
        </div>

        <section className="py-8 bg-lime-600">
          <div className="pt-6 pb-16 bg-white w-8/12 m-auto">
            <h2 className="sub_ttl text-4xl">NEWS</h2>

            <ul className="news_list">
              <li className="news_list_item">
                <div className="news_list_date">
                  <time>2024.06.05</time>
                  <p className="news_item">お知らせ</p>
                </div>
                <p>サイトリニューアルしました。</p>
              </li>
              <li className="news_list_item">
                <div className="news_list_date">
                  <time>2023.12.24</time>
                  <p className="news_item">お知らせ</p>
                </div>
                <p>
                  クリスマスイベントを開催しました。
                </p>
              </li>
              <li className="news_list_item">
                <div className="news_list_date">
                  <time>2023.08.13</time>
                  <p className="news_item">お知らせ</p>
                </div>
                <p>お店を大阪市此花区に移転しました。</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="w-9/12 m-auto">
          <div>
            <h2 className="text-4xl text-center my-8">
              <span>About</span>
            </h2>
          </div>

          <div className="flex gap-3.5">
            <div className="w-3/5">
              <h3 className="text-2xl font-bold text-center">こだわった豆から</h3>
              <p>当店についてご紹介いたします。
                当店では、こだわり抜いたブラジル産のコーヒー豆を使用しております。
                そのコーヒー豆から抽出される一杯は、はじけるような美味しさと適度な苦みが特徴です。
                さらに、コクも香りも抜群で、どなたにもご満足いただける自信があります。
                お客様には、ゆったりとした空間で至福のひとときを過ごしていただけるよう心掛けております。
                ぜひ、特別なコーヒー体験をお楽しみください。
              </p>
            </div>
            <div className="">
              <img src={AboutCoffee} alt="" className="rounded-xl" />
            </div>
          </div>

          <div className="flex flex-row-reverse mt-10 gap-3.5">
            <div className="w-3/5">
              <h3 className="text-2xl font-bold text-center">コーヒーに合うデザートを</h3>
              <p>
              当店のコーヒーに合うデザートは、国産の小麦を使用し、驚くほどの美味しさとしっとり感じる甘さが特徴です。
              ストロベリーやチョコレート、キャラメルなど、多種多様なフレーバーをご用意しております。
              これらのデザートは、当店のこだわりのコーヒーと相性抜群で、大切な人と大事なひと時を過ごすのに最適です。
              心温まるカフェタイムをぜひ当店でお楽しみください。
              </p>
            </div>
            <div>
              <img src={AboutDessert} alt="" className="rounded-xl"/>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="m-auto text-center">
            <Link to="/about" className="text-center"><span className="text-xl py-6 px-20 bg-lime-200 rounded-full hover:bg-lime-500">VIEW MORE <i className="fa-solid fa-arrow-right"></i></span></Link>
          </p>
        </div>

        <Slider {...settings} className="h-52">
          <div className="px-1">
            <img src={Slide01} alt="" className="h-72"/>
          </div>
          <div className="px-1">
            <img src={Slide02} alt="" className="h-72"/>
          </div>
          <div className="px-1">
            <img src={Slide03} alt="" className="h-72"/>
          </div>
          <div className="px-1">
            <img src={Slide04} alt="" className="h-72"/>
          </div>
          <div className="px-1">
            <img src={Slide05} alt="" className="h-72"/>
          </div>
          <div className="px-1">
            <img src={Slide06} alt="" className="h-72"/>
          </div>
        </Slider>
      </main>
    </div>
  );
}

export default index;
