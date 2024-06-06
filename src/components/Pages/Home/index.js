import React from "react";
import "./style.css";
import News from "./News";
import HomeAbout from "./HomeAbout";
import ReactSlider from "./Slider";
import Menu from "./Menu";
import Access from "./ShopAccess";


function index() {
  
  return (
    <div>
      <main>
        <div className="">
          <img src="/img/top-main.jpg" alt="" className="h-full" />
        </div>

        {/* お知らせ */}
        <News />

        {/* 当店について */}
        <HomeAbout />

        {/* スライダー */}
        <ReactSlider />

        {/* メニュー */}
        <Menu />

        {/* アクセス */}
        <Access />

      </main>
    </div>
  );
}

export default index;
