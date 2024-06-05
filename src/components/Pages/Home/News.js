import React from "react";
import "./news.css";

function News() {
  return (
    <div>
      <section className="py-8 bg-lime-600">
        <div className="pt-6 pb-16 bg-white w-8/12 m-auto max-md:w-11/12">
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
              <p>クリスマスイベントを開催しました。</p>
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
    </div>
  );
}

export default News;
