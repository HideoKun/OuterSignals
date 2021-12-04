import React, { memo } from "react";
import { Icon } from "./components";

const c = {
  root: "flex items-center justify-center h-screen text-center",
};

export const App = memo(() => (
  <div className={c.root}>
    <div
      className="container p-5 mx-auto bg-white rounded-md shadow-2xl "
      style={{ maxWidth: 350 }}
    >
      <h1
        className="mb-4 text-2xl "
        style={{
          fontSize: 48,
          lineHeight: "3rem",
        }}
      >
        Glos Czapli
      </h1>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit nisi
        porro repellendus tempora provident voluptatum, illum ad! Voluptatem
        deleniti eum labore distinctio ducimus alias esse aut eius corporis
        doloremque!
      </div>

      <div className="flex justify-around pt-5">
        <Icon shape="arrowCircleLeft" />
        <Icon shape="map" color="persianGreen" />
        <Icon shape="sun" color="sandyBrown" />
        <Icon shape="star" color="yellowCrayola" />
        <Icon shape="mail" color="burntSienna" />
      </div>
    </div>
  </div>
));
