import { useState } from 'react';
import coracaoVazio from '../assets/coracao_vazio.png';
import coracaoCheio from '../assets/coracao_cheio.png';


export default function Like({ likesIniciais = 0 }) {
  const [curtido, setCurtido] = useState(false);
  const [contador, setContador] = useState(Number(likesIniciais));

  const Clique = () => {
    if (!curtido) {
      setContador(contador + 1);
      setCurtido(true);
    } else {
      setCurtido(false);
    }
  };
  return (
    <div className="flex items-center gap-2 p-2 font-iceland">
      <button 
        onClick={Clique} 
      >
        <img 
          src={curtido ? coracaoCheio : coracaoVazio} 
          alt="Like" 
          className="w-8 h-8 object-contain"
        />
      </button>
      
      <span className="text-[#3e1b5f] text-base">
        {contador} {contador === 1 ? 'curtida' : 'curtidas'}
      </span>
    </div>
  );
}