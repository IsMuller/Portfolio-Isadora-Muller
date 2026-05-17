
import foto1 from '../assets/adarlan.png';
import foto2 from '../assets/terrassen.png';
import foto3 from '../assets/ilha_da_caveira.png';
import Like from '../components/Likes';
import Show from '../components/Show';

export default function Instagram() { 
  const fotos = [
    { id: 1, src: foto1 },
    { id: 2, src: foto2 },
    { id: 3, src: foto3 },
  ];

  return (
    <section className="w-full mt-32 px-4 pb-20"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {fotos.map((img) => (
          <div key={img.id} className="border border-[#3e1b5f]/10 rounded-lg overflow-hidden bg-purple-50 shadow-sm">

            <Show imagemSelecionada={img.src} />

            <div className="flex items-center justify-between p-1 border-t border-purple-50">
                <Like/>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}
