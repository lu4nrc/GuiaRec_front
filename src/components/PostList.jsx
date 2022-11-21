import React, { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import api from "../services/api";

const PostList = (Children) => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
     
      var {data}=await api().get("/posts");
      console.log(data)
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  }
  const removePost = async (id) => {
    try {
      await api().delete(`/posts/${id}`);
      getPosts();
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (!Children.status) {
      getPosts()
    }
  }, [Children.status])

  return (
    <div>
      <Dialog.Trigger onClick={Children.open} className=" px-3 py-4 bg-primary hover:bg-primary/90 rounded text-white absolute bottom-6">
        Adicionar Postagem
      </Dialog.Trigger>
      {posts.length > 0 ? posts.map((item, index) => {
        return (
          <div key={index} className="flex gap-4 items-center border-b-2 border-zinc-300 border-solid my-1 p-2">
            <img
              src={item.imageUrl}
              className="object-cover rounded-full w-12 h-12"
            />
            <div className="flex flex-col">
              <h2>{item.name}</h2>
              <span className="text-xs">{posts?.length ?? 0} visualizações</span>
            </div>
            <button onClick={() => removePost(item?._id)}>deletar</button>
          </div>
        );
      }) : null}
    </div>
  );
};

export default PostList;
