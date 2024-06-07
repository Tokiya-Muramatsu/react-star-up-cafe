import { useState } from "react";
import React from "react";
import "./recommend.scss";

function Recommend() {
  const [item, setItem] = useState("");
  const [content, setContent] = useState("");
  const [recommendError, setRecommendError] = useState("");
  const [recommend, setRecommend] = useState([]);

  const handleAddRecommend = (e) => {
    e.preventDefault();
    if (!item || !content) {
      setRecommendError("商品と内容を入力してください");
      return;
    }
    setRecommend([...recommend, { item, content }]);
    setItem("");
    setContent("");
    setRecommendError("");
  };

  return (
    <div>
      <div className="bg-lime-600 py-10">
        <div className="title">
          <h1>My Recommend</h1>
        </div>

        <div>
          <form className="form" onSubmit={handleAddRecommend}>
            <div>
              <label>私のおすすめ商品</label>
            </div>

            <div>
              <input
                type="text"
                id="name"
                placeholder="商品名"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>

            {/*バリデーション */}
            <div className="validate-msg">
              {recommendError && (
                <p style={{ color: "red" }}>{recommendError}</p>
              )}
            </div>

            <div>
              <label>内容</label>
            </div>
            <div>
              <textarea
                type="text"
                id="name"
                placeholder="おすすめな理由"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/*バリデーション */}
            <div className="validate-msg">
              {recommendError && (
                <p style={{ color: "red" }}>{recommendError}</p>
              )}
            </div>

            <div>
              <button type="submit">登録</button>
            </div>
          </form>

          <div className="recommend-show">
            <div>
              <h2><span>私のおすすめ一覧</span></h2>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>商品名</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  {recommend.map((recommend, index) => (
                    <tr key={index}>
                      <td>{recommend.item}</td>
                      <td>{recommend.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
