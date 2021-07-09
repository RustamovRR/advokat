import React, { createContext, useState } from "react";

export const Wrapper = createContext();

const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const handleChangeModal = () => {
    setModal((prev) => !prev);
  };

  const onChange = (date) => setDate(date);

  return (
    <Wrapper.Provider
      value={{
        date,
        modal,
        handleChangeModal,
        onChange,
      }}
    >
      {children}
    </Wrapper.Provider>
  );
};

export default ContextProvider;
