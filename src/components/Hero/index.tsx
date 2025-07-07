import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faBook, faRobot } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]" style={{ backgroundImage: `url('data:image/svg+xml,<svg id="visual" viewBox="0 0 2000 1000" width="2000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 341L400 241L800 141L1200 301L1600 251L2000 281L2000 0L1600 0L1200 0L800 0L400 0L0 0Z" fill="%230f0f1a"></path><path d="M0 481L400 451L800 311L1200 471L1600 431L2000 461L2000 279L1600 249L1200 299L800 139L400 239L0 339Z" fill="%23161623"></path><path d="M0 581L400 571L800 431L1200 591L1600 551L2000 581L2000 459L1600 429L1200 469L800 309L400 449L0 479Z" fill="%231c1c2d"></path><path d="M0 801L400 751L800 781L1200 831L1600 831L2000 761L2000 579L1600 549L1200 589L800 429L400 569L0 579Z" fill="%231c1c2d"></path><path d="M0 901L400 871L800 871L1200 931L1600 901L2000 831L2000 759L1600 829L1200 829L800 779L400 749L0 799Z" fill="%23161623"></path><path d="M0 1001L400 1001L800 1001L1200 1001L1600 1001L2000 1001L2000 829L1600 899L1200 929L800 869L400 869L0 899Z" fill="%230f0f1a"></path></svg>')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Global-Scale Sustainable Blockchain Fabric
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Apache ResilientDB (Incubating) offers a high-throughput yielding distributed ledger built upon scale-centric design principles to democratize and decentralize computation
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                    href="https://youtu.be/QlwnZuBHqM4"
                    className="flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 w-40 h-15"
                  >
                  <FontAwesomeIcon icon={faPlayCircle} className="text-base mr-2 h-5" /> Vision
                  </Link>
                  <Link
                    href="https://resai.resilientdb.com"
                    className="flex items-center justify-center rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 w-40 h-15"
                  >
                  <FontAwesomeIcon icon={faRobot} className="text-base mr-2 h-5" /> ResAI
                  </Link>
                  <Link
                    href="https://blog.resilientdb.com/"
                    className="flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 w-40 h-15"
                  >
                  <FontAwesomeIcon icon={faBook} className="text-base mr-2 h-5" /> Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
