import React from "react";
import "./recommend.scss";

function Recommend() {
  return (
    <div className="min-h-screen">
      <div>
        <h1>My Recommend</h1>
      </div>

      <div>
        <form>
          <div>
            <label>私のおすすめ商品</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label>
              内容
            </label>
          <textarea type="text" id="name" />
          </div>

          <div>
            <button type="submit">登録</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Recommend;
