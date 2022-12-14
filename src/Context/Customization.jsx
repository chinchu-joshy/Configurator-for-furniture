import { createContext, useContext, useState } from "react";
export const chairColors = [
  {
    color: "#008000",
    name: "Green",
  },
  {
    color: "#A52A2A",
    name: "Brown",
  },
  {
    color: "#808000",
    name: "Olive",
  },
  {
    color: "#800080",
    name: "Purple",
  },
  {
    color: "#808080",
    name: "Grey",
  },
  {
    color: "#00008B",
    name: "Blue",
  },
];
export const cushionColors = [
  {
    color: "#008000",
    name: "Green",
  },
  {
    color: "#A52A2A",
    name: "Brown",
  },
  {
    color: "#808000",
    name: "Olive",
  },
  {
    color: "#800080",
    name: "Purple",
  },
  {
    color: "#808080",
    name: "Grey",
  },
  {
    color: "#00008B",
    name: "Blue",
  },
];
const CustomizationContext = createContext({});
export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(true);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[1]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};
export const UseCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
