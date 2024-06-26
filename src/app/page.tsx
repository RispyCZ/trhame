
import Image from "next/image"
import { FC } from "react"

const HomePage: FC = () => {
  return (
    <>
      { /* Header */}
      <div className="relative mb-10  bg-stone-900/70">
        <div className="absolute inset-0 z-[-1]">
          <Image fill src='/header.jpg' alt="background" className="z-[-1] object-cover" />
        </div>
        <header className="flex h-[800px] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-slate-300 lg:text-5xl">Fresh vegetables and fruit direct from your farmer</h1>
        </header>
      </div>

      {/* Features */}
      <div className="my-10">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-center text-4xl my-4">How does it work?</h1>
        </div>
        <div className="flex justify-center  items-center text-center w-full">
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold">Find a place📍</h3>
          </div>
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold" >Check opening hours 🕣</h3>
          </div>
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold">Pickup fruits or vegetables 🧺</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage