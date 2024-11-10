import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "./features/todoReducer";
import { CiEdit } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
const Card = React.forwardRef(({ text, data, dragConstraints, delid }) => {
  const [input, setinput] = useState(text);
  const [readonly, setreadonly] = useState(true);
  const dispatch = useDispatch();
  const handleDel = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  const handleUpdate = () => {
    const id=data.id
    dispatch(updateTodo({id,updatedData:input}))
    setreadonly(true)
  };
  const handleCancel=()=>{
    setinput(text)
    setreadonly(true)
  }
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      className="rounded-3xl  bg-[#D6C0B3] p-5 h-[250px] w-[200px] overflow-hidden flex flex-col justify-center items-center"
    >
      <div>
        <textarea
          readOnly={readonly}
          onChange={(e)=>setinput(e.target.value)}
          className="shadow-none outline-none h-[200px] w-[180px] bg-[#D6C0B3] resize-none placeholder-gray-800"
          placeholder="Enter new task"
          type="text"
          value={input}
        />
      </div>
      <div className="w-full grid justify-center  grid-cols-4 space-x-3">
        {readonly ? (
          <button
            onClick={() => setreadonly(false)}
            className="bg-[#493628] col-span-1 text-white p-2 rounded-full flex justify-center items-center"
          >
            <CiEdit className="text-xl" />
          </button>
        ) : (
          <button
            onClick={handleCancel} 
            className="bg-[#493628] col-span-1  text-white p-2 rounded-full flex justify-center items-center"
          >
            <MdCancel className="text-xl" />
          </button>
        )}
        {readonly ? (
          <button
            onClick={() => handleDel(delid)}
            className="bg-[#493628] col-span-3 w-full text-white p-2 rounded-full"
          >
            Delete
          </button>
        ) : (
          <button
            onClick={() => handleUpdate()}
            className="bg-[#493628] col-span-3 w-full text-white p-2 rounded-full"
          >
            Update
          </button>
        )}
      </div>
    </motion.div>
  );
});

export default Card;
