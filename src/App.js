import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { Newtodo } from "./Newtodo";

function App() {
  const containerRef = useRef();

  const data=useSelector(state=>state.todo)
  // const dispatch=useDispatch()
  
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative bg-[#E4E0E1]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-[#493628] text-[80px] md:text-[100px] lg:text-[150px]">Docs.</h1>
        </div>
        <div
          ref={containerRef}
          className="absolute grid grid-cols-6 gap-4 p-10 inset-0 overflow-auto"
        >
          {data?.map((e, i) => (
            <Card data={e} text={e.text} delid={e.id} key={i} dragConstraints={containerRef} />
          ))}
          <Newtodo dragConstraints={containerRef}/>
        </div>
      </div>
    </>
  );
}

export default App;
