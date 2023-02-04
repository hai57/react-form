import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [forms, setForms] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
  });
  const [modal, setModal] = useState(false);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setModal(!modal);
    console.log(forms);
  };
  const onHandleClose = (e) => {
    setModal(!modal);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Form</h3>
            </div>

            <div className="panel-body">
              <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên "
                    onChange={onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="Nhập SĐT"
                    onChange={onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gmail:</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Nhập Gmail"
                    onChange={onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nội dung:</label>
                  <textarea
                    name="content"
                    type="text"
                    className="form-control"
                    placeholder="Nhập nội dung"
                    onChange={onHandleChange}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="Popup">
          <div className="Popup-frame">
            <div>
              <h1>Nội dung vừa nhập</h1>
            </div>
            <div className="pop-group">
              <label>Gmail:</label>
              <input className="inp-pop" value={forms.email}></input>
            </div>
            <div className="pop-group">
              <label>Nội dung:</label>
              <textarea
                className="txtarea-pop"
                value={forms.content}
              ></textarea>
            </div>
            <button onClick={onHandleClose}> Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
