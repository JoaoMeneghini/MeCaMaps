import React, { createContext, useState, useContext } from "react";

const OptionContext = createContext();

export default function OptionProvider({ children }) {
  const [hereC1, setHereC1] = useState('');
  const [whereC1, setWhereC1] = useState('');
  const [toColor, setToColor] = useState([]);

  return (
    <OptionContext.Provider
      value={{
        hereC1,
        setHereC1,
        whereC1,
        setWhereC1,
        toColor,
        setToColor
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}

export function useHereC1() {
  const context = useContext(OptionContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { hereC1, setHereC1 } = context;
  return { hereC1, setHereC1 };
}

export function useWhereC1() {
    const context = useContext(OptionContext);
    const { whereC1, setWhereC1 } = context;
    return { whereC1, setWhereC1 };
  }

  export function useColor() {
    const context = useContext(OptionContext);
    const { toColor, setToColor } = context;
    return { toColor, setToColor };
}
