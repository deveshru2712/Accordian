import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Data from "./Data";

const Accordian = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIdArr, setSelectedIdArr] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  useEffect(() => {
    console.table(selectedId, selectedIdArr, multiSelect);
  }, [selectedId, selectedIdArr, multiSelect]);

  const onClickHandler = (id) => {
    if (multiSelect) {
      if (selectedIdArr.includes(id)) {
        console.log("included");
      } else {
        selectedIdArr((prev) => [...prev, id]);
      }
    } else {
      if (id == selectedId) {
        setSelectedId(null);
      } else setSelectedId(id);
    }
  };

  const enableMutliSelect = () => {
    if (multiSelect == false) {
      setMultiSelect(true);
    } else {
      setMultiSelect(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 border-2 border-black rounded-lg flex flex-col justify-start items-center gap-2 ">
        <h2 className="text-xl">This is an Accordian</h2>
        <ul className="flex flex-col items-center justify-between w-full p-4 text-xl gap-2">
          {Data && Data.length > 0 ? (
            Data.map((items) => (
              <li
                key={items.id}
                onClick={() => onClickHandler(items.id)}
                className="w-full border-2 p-2 rounded-lg cursor-pointer"
              >
                <div className="flex justify-between gap-2">
                  <div className="flex flex-col ">
                    <span>{items.question}</span>
                    {selectedId == items.id ? (
                      <span>{items.answer}</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div>
                    <ChevronDown />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <span>no question</span>
          )}
        </ul>
        <button
          className="p-2 bg-green-400 rounded-lg text-white cursor-pointer"
          onClick={() => enableMutliSelect()}
        >
          Multi Select
        </button>
      </div>
    </div>
  );
};

export default Accordian;
