import React, { Children, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Check } from "phosphor-react";
import api from "../services/api";

export const PostAdd = (Children) => {
  const inputstyle =
    "focus:outline-0 bg-slate-200 px-4 py-1 rounded text-base placeholder:text-zinc-500 focus:shadow-none focus:border-none";

  const [name, setName] = useState("");
  const [imageUrl, setImg] = useState("");
  const [videoUrl, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addPost = async () => {
    try {
      await api().post("/posts", { name, imageUrl, videoUrl, category, description });
      alert("success")
      dispose();
    } catch (e) {
      console.log(e);
    }
  }


  const dispose = () => {
    Children.close(true);
    setName("");
    setImg("");
    setVideo("");
    setDescription("")
    setCategory("");
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed z-10 flex justify-center items-center">
        <Dialog.Content className="relative bg-white text-black w-full mx-3 px-5 py-3 md:px-10 rounded-lg md:w-[480px] shadow-black/25">
          <Dialog.Close className="absolute right-3 top-3" onClick={() => dispose()}>
            <X size={24} />
          </Dialog.Close>
          <Dialog.Title className="font-black text-2xl text-center px-4">
            <span className="pink-gradient">Adicionar </span>Postagem
          </Dialog.Title>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Nome do video
            </label>
            <input
              name="titlepost"
              type="text"
              id="titlepost"
              className={inputstyle}
              value={name}
              onChange={(v) => setName(v.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Link da imagem
            </label>
            <input
              name="imglink"
              type="text"
              id="imglink"
              value={imageUrl}
              onChange={(v) => setImg(v.target.value)}
              className={inputstyle}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Link do video
            </label>
            <input
              name="videolink"
              type="text"
              id="videolink"
              value={videoUrl}
              onChange={(v) => setVideo(v.target.value)}
              className={inputstyle}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Descrição
            </label>
            <textarea
              name="resumo"
              type="text"
              id="resumo"
              value={description}
              onChange={(v) => setDescription(v.target.value)}
              className={inputstyle}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Categoria
            </label>
            <select onChange={(v)=>setCategory(v.target.value)}>
              <option value="Anuncio">Anuncio</option>
              <option  value="Teste">Teste</option>
              <option  value="Commons">Commons</option>
            </select>
            
          </div>
          <Dialog.Close />

          <button onClick={() => addPost()}
            className="w-full bg-primary hover:bg-primary/95 flex justify-center items-center gap-3 px-5 h-12 rounded-md text-white font-semibold"
            type="submit"
          >
            <Check size={32} />
            Salvar
          </button>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
