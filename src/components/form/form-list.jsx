import React from "react";

const FormList = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.fullName}</li>
            <li>{item.phone}</li>
            <li>{item.mail}</li>
            <li>{item.content}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default FormList;
