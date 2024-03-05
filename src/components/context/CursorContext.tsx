import React, { useState, useEffect, createContext } from "react";

type CursorType = {
  cursorVariant: { x: number; y: number; backgroundColor: string,variant:string };
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

export const CursorContext = createContext({} as CursorType);

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [variant, setVariant] = useState("small");

  const handleMouseEnter = () => {
    setVariant("large");
  };

  const handleMouseLeave = () => {
    setVariant("small");
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const smallVariant = {
    x: cursorPos.x - 6,
    y: cursorPos.y - 6,
    backgroundColor: "#0e1112",
    variant:'small'
  };

  const largeVariant = {
    x: cursorPos.x - 60,
    y: cursorPos.y - 60,
    backgroundColor: "#fff",
    variant:'large'
  };

  const cursorVariant = variant === "small" ? smallVariant : largeVariant;

  return (
    <CursorContext.Provider
      value={{
        cursorVariant: cursorVariant,
        handleMouseEnter: handleMouseEnter,
        handleMouseLeave: handleMouseLeave,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
