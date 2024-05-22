"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" style={{ backgroundColor: '#0F0F1A' }}>
      <div className="container">
        <SectionTitle
          title="Quick Setup"
          paragraph="Get started with Apache ResilientDB (Incubating) in three steps."
          center
          mb="0px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[800px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
               <div className="relative aspect-[77/40] items-center justify-center w-full h-auto">
              <Image src="/images/video/code.svg" alt="video image" fill className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
