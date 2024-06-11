import { useState, useEffect } from "react";
import "./recommend.scss";
import Dexie from "dexie";
import RecommendForm from "./RecommendForm";
import RecommendList from "./RecommendList";
import SearchForm from "./SearchForm";
import Modal from "./Modal/Modal";


// データベース初期化
const db = new Dexie("recommendDB");
db.version(1).stores({
  recommends: "++id, item, content", // id自動生成
});

function RecommendFormList() {
  const [recommend, setRecommend] = useState([]);
  const [filteredRecommend, setFilteredRecommend] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    db.recommends.toArray().then((recommends) => {
      setRecommend(recommends);
      setFilteredRecommend(recommends); // 初期表示用に全件セット
    });
  }, []);

  const addRecommend = ({ item, content }) => {
    // データベース追加
    db.recommends.add({ item, content }).then(() => {
      // 追加後、indexDBからデータを読み込む
      db.recommends.toArray().then((recommends) => {
        setRecommend(recommends);
        setFilteredRecommend(recommends); // 追加後、全件セット
      });
    });
  };

  const handleDeleteRecommend = (id) => {
    db.recommends.delete(id).then(() => {
      db.recommends.toArray().then((recommends) => {
        setRecommend(recommends);
        setFilteredRecommend(recommends);
      });
    });
    closeModal();
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setFilteredRecommend(
        recommend.filter(
          (r) =>
            r.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredRecommend(recommend);
    }
  };

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
  };

  return (
    <div>
      <RecommendForm addRecommend={addRecommend} />
      <SearchForm onSearch={handleSearch} />
      <RecommendList recommends={filteredRecommend} openModal={openModal} />

      {showModal && (
        <Modal
          show={showModal}
          item={itemToDelete?.item}
          onClose={closeModal}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}

export default RecommendFormList;
