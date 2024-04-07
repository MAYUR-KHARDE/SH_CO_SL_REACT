import React from "react";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 rounded w-52 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <img
            className="object-contain"
            src="https://source.unsplash.com/900x900/?pizza"
            alt=""
          />
        </div>
        <div className="font-serif text-center font-semibold p-4">
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, provident.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
