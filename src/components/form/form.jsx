import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FormList from "./form-list";

const Forms = () => {
  const [forms, setForms] = useState({
    fullName: "",
    phone: "",
    email: "",
    content: "",
  });

  const [list, setList] = useState([]);

  const [formError, setFormError] = useState({});

  const onHandleChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const addFormToList = () => {
    setList([
      ...list,
      {
        id: uuidv4(),
        fullName: forms.fullName,
        phone: forms.phone,
        mail: forms.email,
        content: forms.content,
      },
    ]);
  };
  const formInput = [
    {
      name: "fullName",
      label: "Name:",
      placeholder: "Nhập Tên:",
      errName: formError.fullName,
    },
    {
      name: "phone",
      label: "Phone:",
      placeholder: "Nhập SDT :",
      errName: formError.phone,
    },
    {
      name: "email",
      label: "Gmail:",
      placeholder: "Nhập Gmail:",
      errName: formError.email,
    },
  ];
  const onHandleSubmitError = () => {
    let err = { ...formError };
    let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (forms.fullName === "") {
      err.fullName = "Tên không được để trống";
    } else {
      delete err.fullName;
    }
    if (forms.phone === "") {
      err.phone = "SĐT không được để trống";
    } else {
      delete err.phone;
    }
    if (forms.email === "") {
      err.email = "Gmail không được để trống";
    } else if (!regex.test(forms.email)) {
      err.email = "Email không đúng định dạng";
    } else {
      delete err.email;
    }
    if (forms.content === "" || forms.content.length > 50) {
      err.content = "Nội dung không được để trống và không được quá 50 kí tự";
    } else {
      delete err.content;
    }
    setFormError(err);
    return Object.keys(err).length === 0;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isValid = onHandleSubmitError();
    if (isValid) {
      addFormToList();
    }

    console.log(isValid);
    console.log(list);
  };

  return (
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">FORM CONTACT</h3>
          </div>

          <div className="panel-body">
            <h3>Fill the Form</h3>
            <form onSubmit={onHandleSubmit}>
              {formInput.map((item, index) => {
                return (
                  <div key={index} className="form-group">
                    <label>{item.label}</label>
                    <input
                      name={item.name}
                      type="text"
                      className="form-control"
                      placeholder={item.placeholder}
                      onChange={onHandleChange}
                    />
                    <span className="non-valid">{item.errName}</span>
                  </div>
                );
              })}
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="content"
                  type="text"
                  className="form-control"
                  placeholder="Nhập nội dung"
                  onChange={onHandleChange}
                />
                <span className="non-valid">{formError.content}</span>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {list.length > 0 && (
        <div className="list_form">
          <FormList list={list} />
        </div>
      )}
    </div>
  );
};
export default Forms;
