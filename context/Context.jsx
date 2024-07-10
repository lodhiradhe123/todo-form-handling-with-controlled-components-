import React from "react";
import { createContext, useState } from "react";

export const textContext = createContext();
function Context(props) {
  const [name, setName] = useState("mera name radhe hai !");
  return (
    <textContext.Provider value={[name, setName]}>
      {props.children}
    </textContext.Provider>
  );
}

export default Context;
