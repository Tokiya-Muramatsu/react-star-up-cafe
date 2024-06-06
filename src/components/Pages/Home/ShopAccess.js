import React from "react";
import "./access.scss";

function ShopAccess() {
  return (
    <div>
      <div className="shop bg-lime-600">
        <div>
          <h2>
            <span>SHOP</span>
          </h2>
        </div>
        <div className="access-wrap">
          <div>
            <h3 className="text-2xl text-center">
              Star Up Cafe
            </h3>

            <table>
              <tr>
                <th>所在地</th>
                <td>〒554-0024<br /> 大阪府大阪市此花区島屋６丁目２−６１</td>
              </tr>
              <tr>
                <th>営業時間</th>
                <td>10:00 ~ 17:00</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>00-0000-0000</td>
              </tr>
              <tr>
                <th>備考</th>
                <td>ユニバーサルシティ駅 徒歩5分</td>
              </tr>
            </table>
          </div>
          <div className="access">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.2694647718586!2d135.43799900768266!3d34.66847603900819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e896c92411e5%3A0xcb443fce0d6914b5!2z44Om44OL44OQ44O844K144Or44O744K344OG44Kj44Km44Kp44O844Kv5aSn6Ziq!5e0!3m2!1sja!2sjp!4v1717657237988!5m2!1sja!2sjp"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="お店の場所"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAccess;
