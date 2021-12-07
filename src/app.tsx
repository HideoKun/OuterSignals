import React, { memo } from "react";
import { Icon } from "./components";
import "../../slider/src/App.css";

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

        const dataSlider = [
  { img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
  { img: 'https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
  { img: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }
]

const Slider = ({length}) => {
  const [current, setCurrent] = useState(0);
  length = dataSlider.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  };
  
  return (
      <div className="slider">
          <ArrowLeftIcon className="arrow-left h-11 w-11 text-yellow-500" onClick={prevSlide}/>
          <ArrowRightIcon className="arrow-right h-11 w-11 text-yellow-500" onClick={nextSlide}/>
          {dataSlider.map((item, index) => {
              return (
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                      {index === current && (
                          <img src={item.img} alt='sth' className="image"/>
                      )}
                  </div>
              )
          })}
      </div>   
  )
}

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

function App() {
  return <Slider />
}

export default App;
