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

      <div className="mt-8">
        <div className="flex flex-col">
          <span className="font-bold uppercase">Zespół redakcyjny</span>
          <span>Ala Ania Basia Bolko Lili Zuzia</span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span className="font-bold uppercase">Wsparcie redakcyjne</span>
          <span>Alicja, Asia, Honorata</span>
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-bold uppercase">Zespół Techniczny</span>
          <span>Staszek i Wojtek</span>
        </div>

        <div className="mt-6">Pierwszy numer juz wkrótce!!!</div>
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
