import foto1 from '../assets/Aelin.png';
import foto2 from '../assets/Nesryn.png';
import foto3 from '../assets/Manon.png';
import foto4 from '../assets/lyly.png';



export default function Images() { 
  const imagens = [
    { id: 1, src: foto1 },
    { id: 2, src: foto2 },
    { id: 3, src: foto3 },
    { id: 4, src: foto4 },
  ];

  return (
    <section className="w-full mt-32 px-4 pb-20 bg-transparent"> 
      <div className="grid grid-cols-2 gap-4 w-full">
        {imagens.map((img) => (
          <div key={img.id} className="relative h-[350px] overflow-hidden group shadow-lg">
            <img 
              src={img.src} 
              alt={`Galeria ${img.id}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{
                imageRendering: 'high-quality',
                objectPosition: 'center 30%' 
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}