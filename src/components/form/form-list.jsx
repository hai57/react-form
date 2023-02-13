// import React from "react";
// import { ReactPropTypes } from "react";

// const List = (props) => {
//   const { formsName } = props;
//   return (
//     <div>
//       <li>{formsName}</li>
//       <button>X</button>
//     </div>
//   );
// };
// export default List;
import React from "react";
// import PropTypes from "prop-types";

// list.propTypes = {
//   forms: PropTypes.array,
// };
// list.defaultProps = {
//   forms: [],
// };

function list(props) {
  const { forms, formsName } = props;
  return (
    <div>
      <ul>
        <li>HJello </li>;
      </ul>
    </div>
  );
}

export default list;
