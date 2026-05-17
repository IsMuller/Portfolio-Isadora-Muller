import { useState } from 'react';

export default function Show({ imagemSelecionada }) {
  const [exibir, setExibir] = useState(false);

  return (
    <>
      <div className="h-[350px] w-full overflow-hidden bg-gray-200">
        {exibir ? (
          <img 
            src={imagemSelecionada} 
            alt="Post" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full"></div>
        )}
      </div>

      <button 
        onClick={() => setExibir(!exibir)}
        className="bg-[#3e1b5f] text-white px-4 py-2 font-bold uppercase text-[10px] rounded-sm transition-all hover:bg-[#5a2a8a]"
      >
        {exibir ? 'Ocultar' : 'Mostrar'}
      </button>
    </>
  );
}