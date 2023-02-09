import React from "react";

const Forms = (props) => {
  const { onHandleChange, onHandleSubmit } = props;

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
  );
};
export default Forms;
