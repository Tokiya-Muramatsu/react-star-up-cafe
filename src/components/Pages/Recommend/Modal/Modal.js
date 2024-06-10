import React from "react";
import "./modal.scss";

function Modal({ show, item, onClose, onConfirm }) {
  if (!show) {
    return null;
  }

  return (

      <div className="modal-overlay">
        <div className="modal">
            <p>この「{item}」を削除しますか？</p>
            <button onClick={onConfirm}>削除</button>
            <button onClick={onClose}>キャンセル</button>
        </div>

      </div>
  );
}

export default Modal;
