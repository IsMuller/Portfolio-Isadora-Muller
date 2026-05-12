import imgtog from '../assets/erilea.png'

export default function Hero() {
  return (
    <section className="w-full h-[550px] relative overflow-hidden bg-[#f4ece1] flex items-center justify-center">
      <img 
        src={imgtog} 
        alt="Mapa Erilea" 
        className="absolute w-full h-full object-cover"
        style={{
          objectPosition: 'center 50%', 
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) saturate(1.1)', 
        }}
      />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)]"></div>
    </section>
  )
}
