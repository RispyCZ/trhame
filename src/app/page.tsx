
import { Button } from "@/components/base/button"
import Image from "next/image"

const Home = () => {
  return (
    <>
      { /* Header */}
      <div className="relative mb-10  bg-stone-900/70">
        <div className="absolute inset-0 z-[-1]">
          <Image fill src='/header.jpg' alt="background" className="z-[-1] object-cover" />
        </div>
        <header className="flex h-[600px] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-slate-300 lg:text-5xl">Čerstvá zelenina a ovoce přímo od vašeho farmáře</h1>
        </header>
      </div>

      {/* Getting started */}
      <div className="my-10 flex flex-col gap-4 justify-center items-center">
        <h3 className="font-black text-4xl">Tak neváhej a zační ještě dnes</h3>
        <h4 className="font-semibold text-gray-700 text-2xl">Začni registrací</h4>
        <Button>Registrovat se</Button>
      </div>

      {/* Features */}
      <div className="my-10">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-center text-4xl my-4">Jak to funguje?</h1>
        </div>
        <div className="flex justify-center  items-center text-center w-full">
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold">Najdi místo 📍</h3>
          </div>
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold" >Zkontroluj otvírací hodiny 🕣</h3>
          </div>
          <div className="bg-emerald-300 bg-opacity-30 p-10 my-3">
            <h3 className="text-3xl font-bold">Natrhej si 🧺</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home