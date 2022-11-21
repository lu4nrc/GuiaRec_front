import React from "react";
import play from "../assets/play.svg";
import * as Dialog from "@radix-ui/react-dialog";
import VideoModal from "./VideoModal";

export const VideoPreviewCard = (props) => {
  return (
    <div className="relative rounded-lg overflow-hidden ">
      <img className="object-cover lg:h-96" src={props.linkImg} alt="" />
      <div
        className={`absolute inset-0 hover:bg-gradient-to-t hover:from-primary`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <Dialog.Root>
            <VideoModal linkvideo={props.linkvideo} />
            <Dialog.Trigger>
              <img className="w-10 lg:w-16" src={play} />
            </Dialog.Trigger>
          </Dialog.Root>
        </div>
      <div className="absolute bottom-5 left-3">
        <strong className="text-white text-base block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block mt-1"></span>
      </div>
      </div>
    </div>
  );
};
