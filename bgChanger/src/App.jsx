import { useState } from "react";



function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 mx-3  rounded-xl  ">
        <button 
        onClick={() => setColor("red")}
        className=" p-2 rounded-xl  bg-red-600" >red</button>
        <button
        onClick={() => setColor("green")}
         className="bg-green-500 p-2 rounded-xl ">green</button>
        <button 
        onClick={() => setColor("yellow")}
        className="bg-yellow-500 p-2 rounded-xl ">yellow</button>
        <button
        onClick={() => setColor("orange")}
         className="bg-orange-500 p-2 rounded-xl ">orange</button>
        <button
        onClick={() => setColor("pink")}
         className="bg-pink-500 p-2 rounded-xl ">pink</button>
        <button
        onClick={() => setColor("blue")}
         className="bg-blue-500 p-2 rounded-xl ">blue</button>
      </div>
      </div>
    </div>
  );
}

export default App;
