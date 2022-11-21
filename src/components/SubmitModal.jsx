import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Check } from "phosphor-react";
export const SubmitModal = () => {
  const inputstyle =
    "focus:outline-0 bg-slate-200 px-4 py-1 rounded text-base placeholder:text-zinc-500 focus:shadow-none focus:border-none";

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed z-10 flex justify-center items-center">
        <Dialog.Content className="relative bg-white text-black w-full mx-3 px-5 py-3 md:px-10 rounded-lg md:w-[480px] shadow-black/25">
          <Dialog.Close className="absolute right-3 top-3">
            <X size={24} />
          </Dialog.Close>
          <Dialog.Title className="font-black text-2xl text-center px-4">
            <span className="pink-gradient">Selecionar </span>plano
          </Dialog.Title>
          <Dialog.Description>
            <span>
              Diga para nós um pouco sobre sua empresa, assim ajudaremos a
              escolher o plano mais adequado para o seu negócio.
            </span>
          </Dialog.Description>
          <form className="mt-8 flex flex-col mx-1 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Nome da Empresa:
                </label>
                <input
                  name="empresa"
                  type="text"
                  id="empresa"
                  className={inputstyle}
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Segmento:
                </label>
                <input
                  name="segmento"
                  type="text"
                  id="segmento"
                  className={inputstyle}
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Slogan da empresa:
              </label>
              <input
                name="slogan"
                type="text"
                id="slogan"
                className={inputstyle}
              ></input>
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="font-semibold">
                Telefone (whatsapp)
              </label>
              <input
                name="slogan"
                type="tel"
                id="slogan"
                className={inputstyle}
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Resumo:
              </label>
              <textarea
                name="resumo"
                type="text"
                id="resumo"
                className={inputstyle}
              ></textarea>
            </div>
            <Dialog.Close>
              <button
                className="w-full bg-primary hover:bg-primary/95 flex justify-center items-center gap-3 px-5 h-12 rounded-md text-white font-semibold"
                type="submit"
              >
                <Check size={32} />
                Enviar Form
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
