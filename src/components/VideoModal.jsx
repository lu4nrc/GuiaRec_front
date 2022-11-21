import React from "react";
import ReactPlayer from "react-player";
import * as Dialog from "@radix-ui/react-dialog";

const VideoModal = (props) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed z-10 flex justify-center items-center">
        <Dialog.Content className="w-full mx-3 md:w-[720px] aspect-video focus:outline-none">
          <ReactPlayer width='100%' height='100%' controls={true} url={props.linkvideo} />;
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

export default VideoModal;
