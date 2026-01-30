"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import DownloadBox from "./DownloadBox";

const Download = () => {
  const [isZIP, setIsZIP] = useState(false);

  // Version configuration
  const version = "1.11.0";
  const fileName = `apache-resilientdb-${version}-incubating-src`;

  // Apache download URLs - use closer.lua for source code (mirrors), downloads.apache.org for sigs/hashes
  const asfDownloadLinkTAR = `https://www.apache.org/dyn/closer.lua/incubator/resilientdb/${version}/${fileName}.tar.gz`;
  const asfSha512LinkTAR = `https://downloads.apache.org/incubator/resilientdb/${version}/${fileName}.tar.gz.sha512`;
  const signLinkTAR = `https://downloads.apache.org/incubator/resilientdb/${version}/${fileName}.tar.gz.asc`;
  const keysLink = "https://downloads.apache.org/incubator/resilientdb/KEYS";

  // ZIP links (if available)
  const asfDownloadLinkZIP = "";
  const asfSha512LinkZIP = "";
  const signLinkZIP = "";

  // Non-ASF (GitHub) links
  const nonAsfDownloadLinkZIP = "https://github.com/apache/incubator-resilientdb/archive/refs/tags/v1.11.0-rc03.zip";
  const nonAsfDownloadLinkTAR = "";
  const nonAsfSha512LinkZIP = "";
  const nonAsfSha512LinkTAR = "";

  const availableZIP = asfDownloadLinkZIP && nonAsfDownloadLinkZIP;
  const availableTAR = asfDownloadLinkTAR && nonAsfDownloadLinkTAR;

  return (
    <section
      id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url('data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect width="960" height="540" fill="%230F0F1A"></rect><g><g transform="translate(191 255)"><path d="M0 -144L112.6 -89.8L140.4 32L62.5 129.8L-62.5 129.8L-140.4 32L-112.6 -89.8Z" fill="%23151523"></path></g><g transform="translate(729 171)"><path d="M0 -92L71.9 -57.4L89.7 20.5L39.9 82.9L-39.9 82.9L-89.7 20.5L-71.9 -57.4Z" fill="%23151523"></path></g></g></svg>')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
    >
      <div className="container">
        <SectionTitle
          title="Download"
          paragraph="Download ASF release of Apache ResilientDB (Incubating)"
          center
          width="665px"
        />

        {/*<div className="w-full">
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
              onClick={() => setIsZIP(true)}
              className={`${
                isZIP ? "text-dark dark:text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              tar.gz
            </span>
          </div>
        </div>*/}

        <div className="flex justify-center">
            {isZIP ? (
              asfDownloadLinkZIP || nonAsfDownloadLinkZIP ? (
                <div className={`grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 ${availableZIP ? 'lg:grid-cols-2': 'lg:grid-cols-1'}`}>
                  {asfDownloadLinkZIP && (
                    <div className="px-10">
                      <DownloadBox
                        packageName={`v${version}`}
                        type="zip"
                        subtitle="Download the latest source code release from Apache"
                        sha512Link={asfSha512LinkZIP}
                        signLink={signLinkZIP}
                        downloadLink={asfDownloadLinkZIP}
                        keysLink={keysLink}
                        isApache={true}
                      />
                    </div>
                  )}
                  {nonAsfDownloadLinkZIP && (
                    <div className="px-10">
                      <DownloadBox
                        packageName="v1.11.0-rc03"
                        type="zip"
                        subtitle="Download the latest source code release from GitHub"
                        sha512Link={nonAsfSha512LinkZIP}
                        signLink=""
                        downloadLink={nonAsfDownloadLinkZIP}
                        keysLink=""
                        isApache={false}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className={`grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 ${availableZIP ? 'lg:grid-cols-2': 'lg:grid-cols-1'}`}>
                  <div className="px-10">
                    <DownloadBox
                      packageName="v1.11.0-rc03"
                      type="zip"
                      subtitle="Download the latest source code release from GitHub"
                      sha512Link={nonAsfSha512LinkZIP}
                      signLink=""
                      downloadLink={nonAsfDownloadLinkZIP}
                      keysLink=""
                      isApache={false}
                    />
                  </div>
                </div>
              )
            ) : (
              <>
                <div className={`grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 ${availableTAR ? 'lg:grid-cols-2': 'lg:grid-cols-1'}`}>
                {asfDownloadLinkTAR && (
                  <div className="px-10">
                    <DownloadBox
                      packageName={`v${version}`}
                      type="tar.gz"
                      subtitle="Download the latest source code release from Apache"
                      sha512Link={asfSha512LinkTAR}
                      signLink={signLinkTAR}
                      downloadLink={asfDownloadLinkTAR}
                      keysLink={keysLink}
                      isApache={true}
                    />
                  </div>
                )}
                {nonAsfDownloadLinkTAR && (
                  <div className="px-10">
                    <DownloadBox
                      packageName={`v${version}`}
                      type="tar.gz"
                      subtitle="Download the latest source code release from GitHub"
                      sha512Link={nonAsfSha512LinkTAR}
                      signLink=""
                      downloadLink={nonAsfDownloadLinkTAR}
                      keysLink=""
                      isApache={false}
                    />
                  </div>
                )}
                </div>
              </>
            )}
        </div>

        {/* Verification Instructions */}
        <div className="mt-16 mx-auto max-w-3xl">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white text-center">
            Verify Your Download
          </h3>
          <div className="rounded-sm bg-white px-8 py-8 shadow-three dark:bg-gray-dark dark:shadow-two">
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              It is essential to verify the integrity of downloaded files using the PGP signature (.asc) or SHA512 hash (.sha512).
            </p>
            
            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              1. Download the KEYS file
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              First, download the{" "}
              <a 
                href={keysLink} 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                KEYS file
              </a>
              {" "}containing the public keys used to sign releases.
            </p>
            <pre className="mb-6 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>gpg --import KEYS</code>
            </pre>

            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              2. Verify using PGP signature
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              Download the .asc signature file and verify:
            </p>
            <pre className="mb-6 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>{`gpg --verify ${fileName}.tar.gz.asc ${fileName}.tar.gz`}</code>
            </pre>

            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              3. Verify using SHA512 hash
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              Download the .sha512 hash file and verify:
            </p>
            <pre className="mb-4 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>{`shasum -a 512 -c ${fileName}.tar.gz.sha512`}</code>
            </pre>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              On Linux, you can use <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">sha512sum</code> instead of <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">shasum -a 512</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;