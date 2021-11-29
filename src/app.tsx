import React from "react";

// className="flex items-center justify-center"

export const App = () => (
  <div className="flex items-center justify-center h-screen text-center bg-persianGreen-50">
    <div
      className="container p-5 mx-auto bg-white rounded-md shadow-2xl "
      style={{ maxWidth: 350 }}
    >
      <h1
        className="mb-4 text-2xl uppercase"
        style={{
          fontFamily: "Fredericka the Great", //"Amatic SC",
          fontSize: 48,
          lineHeight: "3rem",
        }}
      >
        Glos Czapli
      </h1>

      <div
        className=""
        style={{
          fontFamily: "Courier Prime",
          fontSize: 16,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit nisi
        porro repellendus tempora provident voluptatum, illum ad! Voluptatem
        deleniti eum labore distinctio ducimus alias esse aut eius corporis
        doloremque!
      </div>
    </div>
  </div>
);
