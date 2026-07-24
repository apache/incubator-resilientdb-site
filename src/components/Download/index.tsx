"use client";
import SectionTitle from "../Common/SectionTitle";
import DownloadBox from "./DownloadBox";

/** Official ASF releases. Artifact names must match downloads.apache.org. */
const RELEASES = [
  {
    version: "1.12.0",
    fileName: "apache-resilientdb-1.12.0-incubating-rc3-src",
    label: "Current",
  },
] as const;

const KEYS_LINK = "https://downloads.apache.org/incubator/resilientdb/KEYS";
const VERIFICATION_GUIDE = "https://www.apache.org/info/verification.html";

const Download = () => {
  const current = RELEASES[0];

  return (
    <section
      id="download"
      className="relative z-10 py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url('data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect width="960" height="540" fill="%230F0F1A"></rect><g><g transform="translate(191 255)"><path d="M0 -144L112.6 -89.8L140.4 32L62.5 129.8L-62.5 129.8L-140.4 32L-112.6 -89.8Z" fill="%23151523"></path></g><g transform="translate(729 171)"><path d="M0 -92L71.9 -57.4L89.7 20.5L39.9 82.9L-39.9 82.9L-89.7 20.5L-71.9 -57.4Z" fill="%23151523"></path></g></g></svg>')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
    >
      <div className="container">
        <SectionTitle
          title="Download"
          paragraph="Download official Apache ResilientDB (Incubating) source releases. Release artifacts are served via the Apache mirror system (closer.lua). Signature and hash files are always downloaded from the main Apache distribution site."
          center
          width="720px"
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-x-0 gap-y-2 lg:grid-cols-1">
            {RELEASES.map((release) => {
              const downloadLink = `https://www.apache.org/dyn/closer.lua/incubator/resilientdb/${release.version}/${release.fileName}.tar.gz`;
              const sha512Link = `https://downloads.apache.org/incubator/resilientdb/${release.version}/${release.fileName}.tar.gz.sha512`;
              const signLink = `https://downloads.apache.org/incubator/resilientdb/${release.version}/${release.fileName}.tar.gz.asc`;

              return (
                <div key={release.version} className="px-10">
                  <DownloadBox
                    packageName={`v${release.version}${release.label ? ` (${release.label})` : ""}`}
                    type="tar.gz"
                    subtitle="Official ASF source release — use closer.lua mirrors for the tarball; verify with ASC or SHA512 from downloads.apache.org"
                    sha512Link={sha512Link}
                    signLink={signLink}
                    downloadLink={downloadLink}
                    keysLink={KEYS_LINK}
                    isApache={true}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white text-center">
            Verify Your Download
          </h3>
          <div className="rounded-sm bg-white px-8 py-8 shadow-three dark:bg-gray-dark dark:shadow-two">
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              It is essential that you verify the integrity of the downloaded file using the PGP
              signature (<code className="rounded bg-gray-100 px-1 dark:bg-gray-800">.asc</code>)
              or, failing that, the SHA-512 hash (
              <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">.sha512</code>
              ). Always fetch signatures, hashes, and the KEYS file from the main Apache
              distribution site, not from a mirror. See also{" "}
              <a
                href={VERIFICATION_GUIDE}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verifying Apache Software Foundation Releases
              </a>
              .
            </p>

            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              1. Download and import the KEYS file
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              Download the{" "}
              <a
                href={KEYS_LINK}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                KEYS file
              </a>{" "}
              containing the public keys used to sign releases, then import it:
            </p>
            <pre className="mb-6 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>gpg --import KEYS</code>
            </pre>

            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              2. Verify using the PGP signature (preferred)
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              Download the <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">.asc</code>{" "}
              signature from downloads.apache.org (linked above) and verify:
            </p>
            <pre className="mb-6 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>{`gpg --verify ${current.fileName}.tar.gz.asc ${current.fileName}.tar.gz`}</code>
            </pre>

            <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
              3. Verify using the SHA-512 hash (if signature verification is unavailable)
            </h4>
            <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
              Download the <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">.sha512</code>{" "}
              file from downloads.apache.org and check the hash:
            </p>
            <pre className="mb-4 overflow-x-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <code>{`shasum -a 512 -c ${current.fileName}.tar.gz.sha512`}</code>
            </pre>
            <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
              On Linux, you can use{" "}
              <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">sha512sum -c</code>{" "}
              instead of{" "}
              <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">shasum -a 512 -c</code>.
            </p>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              For development from source control (unreleased code), see the{" "}
              <a href="/community" className="text-primary hover:underline">
                Community
              </a>{" "}
              pages. Do not use GitHub archives as a substitute for official ASF releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
