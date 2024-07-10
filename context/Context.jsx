import React from "react";
import { createContext, useState } from "react";

export const textContext = createContext();
function Context(props) {
  const [store, setStore] = useState([]);
  // console.log(props.children);

  return (
    <textContext.Provider value={[store, setStore]}>
      {props.children}
    </textContext.Provider>
  );
}

export default Context;
