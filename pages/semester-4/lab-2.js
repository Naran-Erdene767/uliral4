import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [data, setData] = useState({ clothes: [] });
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [gridCols, setGridCols] = useState(4);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const filteredClothes = data.clothes.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='h-screen w-screen p-10 overflow-y-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-6 gap-4'>
                <input
                    type="text"
                    placeholder="Search clothes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded-lg w-full md:w-1/2"
                />
                <button
                    onClick={() => setGridCols(gridCols === 1 ? 4 : 1)}
                    className="px-4 py-2 bg-purple-700 text-white rounded-lg"
                >
                    Grid: {gridCols === 1 ? "1" : "4"}
                </button>
            </div>

            <div className={`grid gap-4 ${gridCols === 1 ? 'grid-cols-1 md:grid-cols-1' : 'grid-cols-1 md:grid-cols-4'}`}>
                {loading ? (
                    <p className={`${inter.className} text-xl text-gray-400`}>Loading...</p>
                ) : (
                    filteredClothes.map((item) => (
                        <div key={item.id} className="bg-purple-800 p-4 rounded-lg h-96 flex flex-col justify-center items-center">
                            <img src={item.images[0]} alt={item.name} width={120} height={120} className="rounded-lg object-cover" />
                            <h2 className={`${inter.className} text-2xl text-white mt-2`}>{item.name}</h2>
                            <p className={`${inter.className} text-white mt-2 text-center`}>{item.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
