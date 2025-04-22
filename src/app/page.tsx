import Image from "next/image";
import Link from "next/link";
import PageWrapperNormal from "./(components)/PageWrapperNormal";

export default function Home() {
  return (
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

        <div className="absolute text-xs bottom-2">Made by🩷@itsmeprinceyt [ <Link href="https://github.com/itsmeprinceyt" className="underline animate-pulse">GitHub</Link> | <Link href="https://www.youtube.com/@itsmeprinceyt" className="underline animate-pulse">YouTube</Link> ]
          </div>
      </div>
    </PageWrapperNormal>
  );
}
