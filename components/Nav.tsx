import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 border-b-1 border-[#00FF00]/25 left-0 w-full h-[70px] z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <nav className="relative w-full h-full flex items-center justify-between px-5 text-white">
        <div className="font-bold text-xl">
          {'<ATIF />'}
        </div>
        
        <div className="flex text-xl gap-2 md:gap-5 lg:gap-8">
          <Link href="#work">work</Link>
          <span>/</span>
          <Link href="#about">about</Link>
          <span>/</span>
          <Link href="#connect">connect</Link>
        </div>
      </nav>

    </div>
  );
}