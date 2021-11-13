import React, { useMemo } from "react";

export const AddDecrProduct = ({
  decrement,
  quantity,
  increment,
  colorQuantity = true,
  textSize = "text-2xl",
  roundedL = "rounded-l",
  roundedR = "rounded-r",
  width = "w-20",
  disabledDecrementMin = false,
  color = "bg-gray-300",
  colorH = "hover:text-gray-700",
}) => {
  // border-0 py-2 px-6 focus:outline-none
  const disableButton = useMemo(
    () => disabledDecrementMin && quantity === 1,
    [disabledDecrementMin, quantity]
  );
  return (
    <div className="custom-number-input h-10 w-full">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className={` ${disableButton ? 'bg-gray-300' : color} text-gray-600 ${disableButton ? "": colorH} ${disableButton ? "":"hover:bg-gray-400"}  ${width} ${roundedL} cursor-pointer outline-none`}
          onClick={decrement}
          disabled={disableButton}
        >
          <span className={`m-auto ${textSize} font-thin`}>−</span>
        </button>
        <div
          className={`text-center w-full ${
            colorQuantity ? "bg-gray-300" : ""
          }   font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none`}
        >
          <span className="m-auto">{quantity}</span>
        </div>
        <button
          data-action="increment"
          className={`${color} text-gray-600 ${colorH} hover:bg-gray-400 ${width} ${roundedR}  cursor-pointer`}
          onClick={increment}
        >
          <span className={`m-auto ${textSize} font-thin`}>+</span>
        </button>
      </div>
    </div>
  );
};
