import React from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { Check } from "phosphor-react";

export const pricetable = [
  {
    plan: "startup",
    price: "999",
    content: [
      "4 vídeos por mês",
      "Assistência de texto e roteiro",
      "Assistência para criação de conteúdo",
      
    ],
    obs: "Não incluso edição ou produção com motion."
  },
  {
    plan: "Standart",
    price: "797",
    content: [
      "5 Vídeos por mês (59s)",
      "1 Flyer Motion",
      "Assistência de texto e roteiro",
      "Assistência para criação de conteúdo"
      
    ],
    obs: "Não incluso edição ou produção com motion."
  },
  {
    plan: "premium",
    price: "997",
    content: [
      "6 Vídeos por mês (59s)",
      "2 Flyer Motion",
      "Assistência de texto e roteiro",
      "Assistência para criação de conteúdo",
      
    ],
    obs: ""
  },
];

export const PriceCard = (props) => {
  return (
    <div className="relative h-[420px] md:h-[480px] shadow-2xl py-5 rounded-lg gap-6 flex flex-col items-center">
      <span className="text-center uppercase text-zinc-500 font-normal text-sm">
        {pricetable[props.index].plan}
      </span>
      <h2 className="font-black text-4xl before:content-['R$'] before:text-sm">
        {pricetable[props.index].price}
      </h2>
      <div className="flex flex-col  mx-8">
        {pricetable[props.index].content.map((item, index) => {
          return (
            <div className="flex" key={index}>
                <Check size={32}/>
              <span className="">{item}</span>
            </div>
          );
        })}
        <span className="mt-3 font-thin mx-6 text-sm">{pricetable[props.index].obs}</span>
      </div>
      <Dialog.Trigger className=" px-3 py-4 bg-primary hover:bg-primary/90 rounded text-white absolute bottom-6">
            Contratar
          </Dialog.Trigger>
    </div>
  );
};
