import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [forms, setForms] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    content: "",
  });
  useEffect(() => {
    setForms(JSON.parse(localStorage.getItem("forms")));
  }, []);

  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  });

  const sortedForms = forms.sort((a, b) => (a.name < b.name ? -1 : 1));
  const addForm = (name, phone, email, content) => {
    setForms([...forms, { id: uuidv4(), name, phone, email, content }]);
  };
  return (
    <FormContext.Provider value={{ sortedForms }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
