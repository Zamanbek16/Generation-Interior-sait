import React from "react";

const Ingredient = ({ imageSrc, isSelected, onClick, name }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[110px] h-[110px] flex flex-col items-center justify-center
         cursor-pointer m-[11px] mb-[10px]`}
    >
      <img
        className="w-[100px] h-[100px] rounded-3xl border-[3px] border-gradient-to-r from-teal-400 to-blue-500"
        src={imageSrc}
        alt="ingredient"
        style={{ width: "80%", height: "80%" }}
      />
      <p className="font-medium text-[13px] text-orange-200 italic">{name}</p>
    </div>
  );
};

export default Ingredient;
