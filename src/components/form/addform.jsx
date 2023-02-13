import { useContext, useState } from "react";
import { FormContext } from "../context/context-form";

const AddForm = () => {
  //   const { onHandleBlur, formError } = props;
  const { addForm } = useContext(FormContext);
  const [newform, setNewForm] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
  });
  const onHandleChange = (e) => {
    setNewForm({ ...newform, [e.target.name]: e.target.value });
  };
  const { name, phone, email, content } = newform;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addForm(name, phone, email, content);
  };
  return (
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
                // onBlur={onHandleBlur}
              />
              {/* <span className="non-valid">{formError.name}</span> */}
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                name="phone"
                type="text"
                className="form-control"
                placeholder="Nhập SĐT"
                onChange={onHandleChange}
                // onBlur={onHandleBlur}
              />
              {/* <span className="non-valid">{formError.phone}</span> */}
            </div>
            <div className="form-group">
              <label>Gmail:</label>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Nhập Gmail"
                onChange={onHandleChange}
                // onBlur={onHandleBlur}
              />
              {/* <span className="non-valid">{formError.email}</span> */}
            </div>
            <div className="form-group">
              <label>Nội dung:</label>
              <textarea
                name="content"
                type="text"
                className="form-control"
                placeholder="Nhập nội dung"
                onChange={onHandleChange}
                // onBlur={onHandleBlur}
              />
              {/* <span className="non-valid">{formError.content}</span> */}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
