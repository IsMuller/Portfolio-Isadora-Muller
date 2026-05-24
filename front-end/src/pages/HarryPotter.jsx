import { useState } from "react";

//api de Harry Potter pq nenhum computerers criou (ainda) uma api de trono de vidro :(((

export default function ResearchHP() {
    const [name, setName] = useState("");
    const [personagem, setPersonagem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getPersonagem() {
        if(!name) return;

        setLoading(true);
        setPersonagem(null);
        setError(null);

        try {
            const response = await fetch('https://hp-api.onrender.com/api/characters')

            if (!response.ok) throw new Error("O Voldemort deu um Avada Kedavra na conexão :( ");

            const listaBruxinhos = await response.json();
            
            const encontrado = listaBruxinhos.find(
                wizzard => wizzard.name.toLowerCase() === name.toLowerCase()
            );

            if (!encontrado) {
                throw new Error("Trouxas não moram em Hogwards :(");
            }

            setPersonagem(encontrado);
        }   catch (err) {
            setError(err.message);
        }   finally {
            setLoading(false);
        }
    }

    return(
        <section className= "min-h-screen w-full flex flex-col items-center justify-center px-4 pb-20 max-w-7xl mx-auto text-center">
            <div className="flex gap-2 mb-2">
                <input 
                placeholder="Harry Potter"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border border-gray-300 bg-white px-4 py-2 rounded-sm text-black focus:outline-none focus:border-[#3e1b5f]"
                 />
                <button onClick={getPersonagem}
                    className="bg-[#3e1b5f] text-white px-4 py-2 font-bold uppercase text-[10px] rounded-sm transition-all hover:bg-[#5a2a8a]" 
                >
                <p>pesquisa</p>
            </button> 
            </div>
            


            {loading && <p>É leviOsa nao leviosAH...</p>}    
            {error && <p>{error}</p>}

            {personagem && (
                <div className="flex flex-col items-start text-left text-black mt-10 gap-1 max-w-xs mx-auto">
                    
                    {personagem.image && (
                        <img src={personagem.image} alt={personagem.name} style={{ width: "150px" }} />
                    )}
                    {personagem.dateOfBirth && <p>Aniversário: {personagem.dateOfBirth}</p>}
                    {personagem.house && <p>Casa: {personagem.house}</p>}
                    {personagem.patronus && <p>Patrono: {personagem.patronus}</p>}
                    {personagem.actor && <p>Ator/Atriz: {personagem.actor}</p>}

                </div>
            )}
        </section>
    );
}







    
