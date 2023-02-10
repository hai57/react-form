import React, { useState } from "react";

import Forms from "./components/Forms/form";
import Modal from "./components/Modal/modal";
import "./sass/index.css";

const App = () => {
  const [forms, setForms] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
  });

  const [formError, setFormError] = useState({});

  const [modal, setModal] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => {
      return { ...prev, [name]: value };
    });
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const onHandleBlur = () => {
    let err = {};

    if (forms.name === "") {
      err.name = "Tên không được để trống";
    }
    if (forms.phone === "") {
      err.phone = "SĐT không được để trống";
    }
    if (forms.email === "") {
      err.email = "Gmail không được để trống";
    } else {
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regex.test(forms.email)) {
        err.email = "Email không đúng định dạng";
      }
    }
    if (forms.content === "" || forms.content.length > 50) {
      err.content = "Nội dung không được để trống và không được quá 50 kí tự";
    }
    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isValid = onHandleBlur();
    if (isValid) {
      setModal(true);
    }
  };

  const onHandleClose = (e) => {
    setModal(false);
  };

  return (
    <div className="container">
      <Forms
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
        onHandleBlur={onHandleBlur}
        name={forms.name}
        formErrorName={formError.name}
        formErrorPhone={formError.phone}
        formErrorGmail={formError.email}
        formErrorContent={formError.content}
      />
      {modal && (
        <Modal
          onHandleClose={onHandleClose}
          email={forms.email}
          content={forms.content}
        />
      )}
    </div>
  );
};

export default App;
