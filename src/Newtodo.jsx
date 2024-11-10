import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todoReducer";
export const Newtodo = ({ dragConstraints }) => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (text !== "") {
        text.trim(' ')
      dispatch(addTodo({id:Date.now(),text:text}));
      settext("");
    }
  };
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      className="rounded-3xl bg-[#D6C0B3] p-5 h-[250px] w-[200px] overflow-hidden flex flex-col justify-center items-center"
    >
      <div>
        <textarea
          className="shadow-none outline-none h-[200px] w-[180px] bg-[#D6C0B3] resize-none placeholder-gray-800"
          placeholder="Enter new task"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-[#A1887F] w-full text-black p-2 rounded-full"
      >
        submit
      </button>
    </motion.div>
  );
};
