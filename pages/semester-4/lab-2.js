    import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

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
                console.log(result);
            } catch (error) {
                console.error( error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='h-screen w-screen p-20'>
            <div className="h-full w-full rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loading ? (
                    <p className={`${inter.className} text-xl text-gray-400`}>Loading...</p>
                ) : (
                    data.clothes.map((item) => (
                        <div key={item.id} className="bg-purple-800 p-4 rounded-lg w-full h-96 flex flex-col justify-center items-center">
                            <img src={item.images[0]} alt={item.name} width={120} height={120} className="rounded-lg" />
                            <h2 className={`${inter.className} text-2xl text-white mt-2`}>{item.name}</h2>
                            <p className={`${inter.className} text-white mt-2`}>{item.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}