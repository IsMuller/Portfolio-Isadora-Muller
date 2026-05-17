export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-black/10 w-full">
      
      <nav className="flex gap-8 font-bold text-sm">
        <a href="#" className="hover:text-blue-600 transition-colors uppercase">Home</a>
        <a href="#" className="hover:text-blue-600 transition-colors uppercase">Sobre</a>
      </nav>

      <h1 className="text-3xl font-black tracking-tighter uppercase">
        Trono de Vidro
      </h1>


      <div className="w-[100px] md:w-[150px]"></div>

    </header>
  );
}