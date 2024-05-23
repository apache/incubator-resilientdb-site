import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" style={{ backgroundImage: `url('data:image/svg+xml,<svg id="visual" viewBox="0 0 2000 1000" width="2000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2000" height="1000" fill="%230F0F1A"></rect><g transform="translate(961.35041104432 476.3922111923553)"><path d="M284 -215.3C365.2 -124.6 426.4 -6.7 407.5 99.8C388.6 206.3 289.8 301.4 172.6 357.3C55.5 413.2 -79.8 430.1 -175.8 378.6C-271.8 327.2 -328.5 207.6 -333.3 100.6C-338.2 -6.4 -291.3 -100.6 -227.1 -187.4C-162.9 -274.2 -81.4 -353.6 10 -361.6C101.4 -369.5 202.8 -306 284 -215.3" fill="%23151523"></path></g></svg>')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Renewing the Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                The inception of Bitcoin and blockchain has renewed the vision of a democratic and decentralized computational paradigm. This vision aims to integrate privacy, integrity, transparency, and accountability directly into the computational model.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Paradigm Shift at the Core
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At the heart of this paradigm shift lies a family of fault-tolerant consensus protocols. Historically, these have struggled to meet the performance demands of modern applications, signaling a need for evolution.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Reimagining Blockchain Fabric
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                To address these challenges, Apache ResilientDB (Incubating) has boldly reimagined the blockchain fabric through a scale-centric lens. Our complete redesign incorporates parallelism and deep pipelining at every layer, optimizing for modern hardware and global cloud infrastructure. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
