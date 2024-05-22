"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isZIP, setIsZIP] = useState(true);

  const sha256Link = isZIP
    ? "https://github.com/apache/incubator-resilientdb/releases/download/nexres-v1.9.0/nexres-v1.9.0.zip.sha256"
    : "https://github.com/apache/incubator-resilientdb/releases/download/nexres-v1.9.0/nexres-v1.9.0.zip.asc";
  const signLink = isZIP
    ? "https://github.com/apache/incubator-resilientdb/releases/download/nexres-v1.9.0/nexres-v1.9.0.tar.gz.sha256"
    : "https://github.com/apache/incubator-resilientdb/releases/download/nexres-v1.9.0/nexres-v1.9.0.tar.gz.asc";
  const downloadLink = isZIP
    ? "https://github.com/apache/incubator-resilientdb/archive/refs/tags/nexres-v1.9.0.zip"
    : "https://github.com/apache/incubator-resilientdb/archive/refs/tags/nexres-v1.9.0.tar.gz";

  return (
    <section
      id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url('data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect width="960" height="540" fill="%230F0F1A"></rect><g><g transform="translate(191 255)"><path d="M0 -144L112.6 -89.8L140.4 32L62.5 129.8L-62.5 129.8L-140.4 32L-112.6 -89.8Z" fill="%23151523"></path></g><g transform="translate(729 171)"><path d="M0 -92L71.9 -57.4L89.7 20.5L39.9 82.9L-39.9 82.9L-89.7 20.5L-71.9 -57.4Z" fill="%23151523"></path></g></g></svg>')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
    >
      <div className="container">
        <SectionTitle
          title="Download"
          paragraph="Download Apache ResilientDB (Incubating)"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsZIP(true)}
              className={`${
                isZIP ? "pointer-events-none text-primary" : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              zip
            </span>
            <div
              onClick={() => setIsZIP(!isZIP)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isZIP ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsZIP(false)}
              className={`${
                isZIP ? "text-dark dark:text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              tar.gz
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-1 lg:grid-cols-1">
            <PricingBox
              packageName="v1.9.0"
              type={isZIP ? "zip" : "tar.gz"}
              subtitle="Download the latest source code release from GitHub"
              sha256Link={sha256Link}
              signLink={signLink}
              downloadLink={downloadLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
