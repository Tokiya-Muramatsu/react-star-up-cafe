import React from "react";
import { Link } from 'react-router-dom';

function HomeAbout() {
  return (
    <div>
      <div className="w-9/12 m-auto max-md:w-11/12">
        <div>
          <h2 className="text-4xl text-center my-8">
            <span>ABOUT</span>
          </h2>
        </div>

        <div className="flex gap-3.5 max-md:block">
          <div className="w-3/5 max-md:m-auto w-full">
            <h3 className="text-2xl font-bold text-center max-md:text-xl">
              こだわった豆から
            </h3>
            <p>
              当店についてご紹介いたします。
              当店では、こだわり抜いたブラジル産のコーヒー豆を使用しております。
              そのコーヒー豆から抽出される一杯は、はじけるような美味しさと適度な苦みが特徴です。
              さらに、コクも香りも抜群で、どなたにもご満足いただける自信があります。
              お客様には、ゆったりとした空間で至福のひとときを過ごしていただけるよう心掛けております。
              ぜひ、特別なコーヒー体験をお楽しみください。
            </p>
          </div>
          <div className="">
            <img src="/img/about-coffe.jpg"  alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="flex flex-row-reverse mt-10 gap-3.5 max-md:block">
          <div className="w-3/5 max-md:m-auto w-full">
            <h3 className="text-2xl font-bold text-center max-md:text-xl">
              コーヒーに合うデザートを
            </h3>
            <p>
              当店のコーヒーに合うデザートは、国産の小麦を使用し、驚くほどの美味しさとしっとり感じる甘さが特徴です。
              ストロベリーやチョコレート、キャラメルなど、多種多様なフレーバーをご用意しております。
              これらのデザートは、当店のこだわりのコーヒーと相性抜群で、大切な人と大事なひと時を過ごすのに最適です。
              心温まるカフェタイムをぜひ当店でお楽しみください。
            </p>
          </div>
          <div>
            <img src="/img/about-dessert.jpg" alt="" className="rounded-xl" />
          </div>
        </div>
      </div>

      <div className="my-20">
        <p className="m-auto text-center">
          <Link to="/about" className="text-center">
            <span className="text-xl py-6 px-20 bg-lime-200 rounded-full hover:bg-lime-500">
              VIEW MORE <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;
