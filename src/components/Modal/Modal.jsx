import React from "react";

const Modal = (props) => {
  const { email, content, onHandleClose } = props;

  return (
    <div className="Popup">
      <div className="Popup-frame">
        <div>
          <h1>Nội dung vừa nhập</h1>
        </div>
        <div className="pop-group">
          <label>Gmail:</label>
          <input className="inp-pop" value={email}></input>
        </div>
        <div className="pop-group">
          <label>Nội dung:</label>
          <textarea className="txtarea-pop" value={content}></textarea>
        </div>

        <button onClick={onHandleClose}> Close</button>
      </div>
    </div>
  );
};
export default Modal;
