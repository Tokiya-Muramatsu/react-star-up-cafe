import { useState, useEffect } from "react";
import "./recommend.scss";
import Dexie from "dexie";
import Modal from "./Modal/Modal";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecommend, setFilteredRecommend] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    db.recommends.toArray().then(recommends => {
      setRecommend(recommends);
      setFilteredRecommend(recommends); // 初期表示用に全件セット
    });
  }, []);


  const handleAddRecommend = (e) => {
    e.preventDefault();
    if (!item || !content) {
      setRecommendError("商品と内容を入力してください");
      return;
    }

    // データベース追加
    db.recommends.add({ item, content }).then(() => {
      // 追加後、indexDBからデータを読み込む
      db.recommends.toArray().then(recommends => {
        setRecommend(recommends);
        setFilteredRecommend(recommends); // 追加後、全件セット
      });
    });
    setItem("");
    setContent("");
    setRecommendError("");
  };

  const handleDeleteRecommend = (id) => {
    db.recommends.delete(id).then(() => {
      db.recommends.toArray().then(recommends => {
        setRecommend(recommends);
        setFilteredRecommend(recommends);
      });
    });
    closeModal();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setFilteredRecommend(recommend.filter(r => 
        r.item.toLowerCase().includes(searchTerm.toLowerCase()) || 
        r.content.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredRecommend(recommend);
    }
  }

  const openModal = (recommend) => {
    setItemToDelete(recommend);
    setShowModal(true);
  };

  const closeModal = () => {
    setItemToDelete(null);
    setShowModal(false);
  };

  const confirmDelete = () => {
    handleDeleteRecommend(itemToDelete.id);
  }

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

      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">検索</button>
          <a href="recommend">戻る</a>
        </form>
      </div>

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
                <th>商品</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecommend.map(recommend => (
                <tr key={recommend.id}>
                  <td>{recommend.item}</td>
                  <td>{recommend.content}</td>
                  <td>
                    <button onClick={() => openModal(recommend)}>削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
       show={showModal}
       item={itemToDelete?.item}
       onClose={closeModal}
       onConfirm={confirmDelete}
       />

    </div>
  );
}

export default RecommendFormList;
