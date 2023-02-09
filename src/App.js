import React, { useState } from "react";

import Forms from "./components/Forms/Form";
import Modal from "./components/Modal/Modal";
import "./sass/index.css";

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
    setForms({ ...forms, [e.target.name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
    console.log(forms);
  };
  const onHandleClose = (e) => {
    setModal(false);
  };

  return (
    <div className="container">
      <Forms
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
      ></Forms>
      {modal && (
        <Modal
          onHandleClose={onHandleClose}
          email={forms.email}
          content={forms.content}
        ></Modal>
      )}
    </div>
  );
};

export default App;
