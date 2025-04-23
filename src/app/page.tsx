import Image from "next/image";
import Link from "next/link";
import PageWrapperNormal from "./(components)/PageWrapperNormal";

export default function Home() {
  return (
    <div>
      
      <PageWrapperNormal>
        <div className="z-20 max-[680px]:w-full w-[600px] max-[680px]:ml-2 max-[680px]:mr-2 mt-24 mb-24 flex flex-col justify-center items-center gap-6">
          <Image
            className="w-[250px] h-[250px] hover:scale-110 transition-all duration-300"
            src={'/logo/ShareAway5-png.png'}
            alt="Home"
            width={500}
            height={500}
          />

          <div className="flex flex-col justify-center items-center gap-5 text-center">

            <div className="flex justify-center items-center gap-5 text-center">
              <Link
                href="https://share-away-prince.vercel.app/"
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg w-[150px]
            py-2 border border-pink-500 hover:scale-105 transition-all duration-300
            shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 font-extralight">
                Website
              </Link>

              <Link
                href="https://share-away-showcase.vercel.app/"
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg w-[150px]
            py-2 border border-pink-500 hover:scale-105 transition-all duration-300
            shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 font-extralight">
                Showcase
              </Link>

            </div>

            <div className="flex justify-center items-center gap-5 text-center">
              <Link
                href="https://github.com/itsmeprinceyt/share-away-website"
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg w-[150px]
            py-2 border border-pink-500 hover:scale-105 transition-all duration-300
            shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 font-extralight">
                Frontend - Repo
              </Link>

              <Link
                href="https://github.com/itsmeprinceyt/share-away-backend"
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg w-[150px]
            py-2 border border-pink-500 hover:scale-105 transition-all duration-300
            shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 font-extralight">
                Backend - Repo
              </Link>

            </div>

          </div>

          <div className="fixed text-xs bottom-2">Made by🩷@itsmeprinceyt [ <Link href="https://github.com/itsmeprinceyt" className="underline animate-pulse">GitHub</Link> | <Link href="https://www.youtube.com/@itsmeprinceyt" className="underline animate-pulse">YouTube</Link> ]
          </div>
        </div>
      </PageWrapperNormal>

      <PageWrapperNormal>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <div className="text-pink-500 text-shadow-md text-shadow-pink-500/20">#Share Away</div>
          <div className="relative w-[80%] max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/f4PmSaMSYWs?si=JUql2obeiTvAxTnX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>

      </PageWrapperNormal>

    </div>
  );
}
