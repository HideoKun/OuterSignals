import React, { memo } from "react";
import { Icon } from "./components";

const c = {
  root: "flex items-center min-h-full mx-auto justify-center text-center p-5",
};

export const App = memo(() => (
  <div className={c.root} style={{ maxWidth: 560 }}>
    <div className="w-full px-4 py-5 mx-auto bg-white rounded-md shadow-2xl md:p-5">
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
          <span>Ala, Ania, Basia, Bolko, Lili, Zuzia</span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span className="font-bold uppercase">Wsparcie redakcyjne</span>
          <span>Alicja, Asia, Honorata</span>
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-bold uppercase">Zespół Techniczny</span>
          <span>Staszek i Wojtek</span>
        </div>

        <div className="flex justify-around pt-5">
          <Icon shape="sun" color="sandyBrown" />
        </div>

        <div className="mt-6 text-justify " style={{ letterSpacing: -0.5 }}>
          <p className="mt-6 font-bold text-center">Cześć!!!</p>

          <p className="mt-6">
            Witamy Cię na stronie Niezależnego Niereguralnika Czapelskiego :)
            “GŁOS CZAPLI” to internetowa gazeta tworzona przez trzy rodziny
            mieszkające (lub już prawie mieszkające!) w pięknej, malowniczej i
            tyciej wioseczce, otoczonej lasami i jeziorami. Jesteśmy tu po to,
            żeby dzielić się naszymi pasjami, historiami i opowieściami o
            miejscu, w którym żyjemy. Znajdziesz tu obrazki, słowa, zdjęcia,
            rozmowy i dużo więcej.{" "}
          </p>

          <p className="mt-6">
            Gazetę tworzymy wspólnie. Jej pionem jest sześć najważniejszych osób
            - nasi redaktorzy, dziennikarze, badacze okolicy -{" "}
            <span className="font-bold">Zuzia</span> (lat 8),{" "}
            <span className="font-bold">Lili</span> (lat 11),{" "}
            <span className="font-bold">Bolko</span> (lat 3),{" "}
            <span className="font-bold">Basia</span> (lat 6),{" "}
            <span className="font-bold">Ania</span> (lat 3) i{" "}
            <span className="font-bold">Ala</span> (lat 5). Towarzyszą im ich
            rodzice, którzy starają się wspierać talendy, poszukiwania i
            potrzeby swoich dzieci, współtworząc z nimi to kreatywne miejsce w
            sieci.
          </p>

          <p className="mt-6">
            Nie obiecujemy, że będziemy publikować treści regularnie, bo życie
            rodziny ma swoją nieprzewidywalną i piękną dynamikę, ale możecie być
            pewni, że usłyszenie GŁOSU CZAPLI ma w sobie dużo magii, piękna i
            niespodzianek.
          </p>
        </div>
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
