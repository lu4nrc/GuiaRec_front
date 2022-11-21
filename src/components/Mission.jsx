import React from "react";
import { useState } from "react";
import Paragraph from "./Paragraph";

const values = [
  {
    title: "Missão",
    content: () => {
      return (
        <span className="text-slate-900 font-medium text-lg md:text-xl">
          Ajudar e auxiliar no desenvolvimento de cada empresa, Guiando todos
          para um patamar mais alto, através da produção de conteúdos de alto
          valor e qualidade.{" "}
        </span>
      );
    },
  },
  {
    title: "Visão",
    content: () => {
      return (
        <span className="text-slate-900 font-medium text-lg md:text-xl">
          Ser referência nacional, em Agenciamento e Produção de conteúdo,
          agregando valor para cada empresa.
        </span>
      );
    },
  },
  {
    title: "Valores",
    content: () => {
      return (
        <ul className="text-slate-900 font-medium text-lg md:text-xl">
          <li>Inovação</li>
          <li>Integridade</li>
          <li>Qualidade</li>
          <li>Ética e transparência</li>
          <li>Resultados</li>
        </ul>
      );
    },
  },
];

const Mission = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex-col flex">
      <div className="flex gap-5">
        {values.map((v, index) => {
          return (
            <div key={index} className={ value === index ? "relative before:block before:absolute before:inset-7 before:right-0 before:left-0	 before:bg-primary before:h-1 before:rounded-sm" : ""}>
              <button
                className={` font-medium text-xl ${
                  value === index ? "text-primary" : ""
                }`}
                onClick={() => setValue(index)}
              >
                {v.title}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="font-inter text-2xl font-bold mb-2 mt-3">{values[value].title}</h2>
          {values[value].content()}
      </div>
    </div>
  );
};

export default Mission;
