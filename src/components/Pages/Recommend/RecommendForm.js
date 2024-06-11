import React, { useState } from "react";

function RecommendForm({ addRecommend }) {
  const [item, setItem] = useState("");
  const [content, setContent] = useState("");
  const [recommendError, setRecommendError] = useState("");

  const handleAddRecommend = (e) => {
    e.preventDefault();
    if (!item || !content) {
      setRecommendError("項目を入力してください");
      return;
    }

    addRecommend({ item, content });
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
    </div>
  );
}

export default RecommendForm;
