import { useState, useEffect } from "react";
import "./recommend.scss";
import Dexie from "dexie";

// データベース初期化
const db = new Dexie('recommendDB');
db.version(1).stores({
  recommends: '++id, item, content' // id自動生成
});

function RecommendFormList() {
  const [item, setItem] = useState("");
  const [content, setContent] = useState("");
  const [recommendError, setRecommendError] = useState("");
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    db.recommends.toArray().then(recommends => setRecommend(recommends));
  });

  const handleAddRecommend = (e) => {
    e.preventDefault();
    if (!item || !content) {
      setRecommendError("商品と内容を入力してください");
      return;
    }

    // データベース追加
    db.recommends.add({ item, content }).then(() => {
      // 追加後、indexDBからデータを読み込む
      db.recommends.toArray().then(recommends => setRecommend(recommends));
    });
    setItem("");
    setContent("");
    setRecommendError("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleAddRecommend}>
        <div>
          <p>私のおすすめ商品</p>
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
          {recommendError && <p style={{ color: "red" }}>{recommendError}</p>}
        </div>

        <div>
          <p>内容</p>
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
          {recommendError && <p style={{ color: "red" }}>{recommendError}</p>}
        </div>

        <div>
          <button type="submit">登録</button>
        </div>
      </form>

      <div className="recommend-show">
        <div>
          <h2>
            <span>私のおすすめ一覧</span>
          </h2>
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
              {recommend.map(recommend => (
                <tr key={recommend.id}>
                  <td>{recommend.item}</td>
                  <td>{recommend.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecommendFormList;
