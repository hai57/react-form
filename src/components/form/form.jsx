import React, { useContext, useState } from "react";

// import {sortedForms} from "../context/context-form";
import Modal from "../popup/popup";
import list from "./form-list";

const Forms = (props) => {
  // const {
  //   formErrorName,
  //   formErrorPhone,
  //   formErrorGmail,
  //   formErrorContent,
  //   onHandleSubmitError,
  //   onHandleChange,
  //   onHandleSubmit,
  // } = props;
  // const {sortedForms} = useContext(EmployeeContext);

  const [list, setList] = useState();

  const [modal, setModal] = useState(false);

  const [forms, setForms] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
  });

  const [formError, setFormError] = useState({});

  const onHandleChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const onBlurError = (name) => {
    let err = { ...formError };
    switch (name) {
      case "name":
        err.name = forms.name == "" ? "Tên không được để trống" : "";
        break;
      case "phone":
        err.phone = forms.phone == "" ? "SĐT không được để trống" : "";
        break;
      case "email":
        if (forms.email === "") {
          err.email = "Gmail không được để trống";
        } else {
          let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
          if (!regex.test(forms.email)) {
            err.email = "Gmail không đúng định dạng";
          } else {
            err.email = "";
          }
        }
        break;
      case "content":
        err.content =
          forms.content == ""
            ? "Nội dung không được để trống và không được quá 50 kí tự"
            : "";
        break;
      default:
        break;
    }
    setFormError(err);
    return Object.keys(err).length < 1;
  };

  const onHandleSubmitError = () => {
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
      let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regex.test(forms.email)) {
        err.email = "Email không đúng định dạng";
      }
    }
    if (forms.content === "" || forms.content.length > 50) {
      err.content = "Nội dung không được để trống và không được quá 50 kí tự";
    }
    setFormError(err);
    return Object.keys(err).length < 1;
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isValid = onHandleSubmitError();
    if (isValid) {
      setModal(true);
    }
  };

  // const formsList = forms.map((form) => <li>{form.name}</li>);
  const onHandleClose = (e) => {
    setModal(false);
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
              <div className="form-group">
                <label>Name:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên "
                  onChange={onHandleChange}
                  onBlur={() => onBlurError("name")}
                />
                <span className="non-valid">{formError.name}</span>
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Nhập SĐT"
                  onChange={onHandleChange}
                  onBlur={() => onBlurError("phone")}
                />
                <span className="non-valid">{formError.phone}</span>
              </div>
              <div className="form-group">
                <label>Gmail:</label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Nhập Gmail"
                  onChange={onHandleChange}
                  onBlur={() => onBlurError("email")}
                />
                <span className="non-valid">{formError.email}</span>
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="content"
                  type="text"
                  className="form-control"
                  placeholder="Nhập nội dung"
                  onChange={onHandleChange}
                  onBlur={() => onBlurError("content")}
                />
                <span className="non-valid">{formError.content}</span>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
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
export default Forms;
