import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [Grid, setGrid] = useState(false);
    const [category, setCategory] = useState("");
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const [clothes, instruments, tools, groups, provinces, figures, attractions] = await Promise.all([
                    fetch("https://mongol-api-rest.vercel.app/clothes"),
                    fetch("https://mongol-api-rest.vercel.app/instruments"),
                    fetch("https://mongol-api-rest.vercel.app/historicaltools"),
                    fetch("https://mongol-api-rest.vercel.app/ethnicgroups"),
                    fetch("https://mongol-api-rest.vercel.app/provinces"),
                    fetch("https://mongol-api-rest.vercel.app/historicalfigures"),
                    fetch("https://mongol-api-rest.vercel.app/touristattractions")
                  ]);
                  const results = await Promise.all([
                    clothes.json(),
                    instruments.json(),
                    tools.json(),
                    groups.json(),
                    provinces.json(),
                    figures.json(),
                    attractions.json()
                  ]);
                  setData({
                    clothes: results[0],
                    instruments: results[1],
                    tools: results[2],
                    groups: results[3],
                    provinces: results[4],
                    figures: results[5],
                    attractions: results[6],
                  });
                setLoading(false);
                console.log(results);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch data.");
            }
        }
        fetchData();
    }, []);
    {error && <p className="text-red-500">{error}</p>}

    const selectedData = data[category] || [];
    const filteredData = selectedData.filter(item =>
        item.name?.toLowerCase().includes(query.toLowerCase())
    );
    
    const router = useRouter();
    const Back0 = () => {
        router.push("/semester-4/lab-0");
      };
    const Back = () => {
      router.push("/semester-4/lab-1");
    };
    const Back1 = () => {
        router.push("/dashboard");
      };

return(
<div className="h-screen flex flex-row gap-x-4 p-4 bg-gray-300 font-bold text-black">
      
      <div className="h-[97vh] w-[16.5%] bg-white p-4 flex flex-col items-center rounded-xl">
        <div className='flex flex-col items-center'>
            <img src='https://nhs.edu.mn/favicon.ico' width={120}/>
            <div className='text-purple-600 mt-4 font-bold'>11В Г.Наран-Эрдэнэ</div>
         </div>    
        <div className='h-[65%] w-[90%] mt-8'>
                <button onClick={Back0} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z"/>
                </svg>
                <p className='ml-2 text-semibold'>lab-0</p>
                </button>

                <button onClick={Back} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16" className='text-black ml-4' >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                <p className='ml-2 text-semibold'>lab-1</p>
                </button>
                
                <button onClick={Back1} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p className='ml-2 text-semibold'>lab-2</p>
                </button>
                
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p className='ml-2 text-semibold'>lab-3</p>
                </button>
                
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16" className='text-black ml-4'>
                     <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                     <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                <p className='ml-2 text-semibold'>Салбар</p>
                </button>

                
            </div>
            <div className='h-[7%] w-[90%] mt-auto flex flex-row items-center cursor-pointer rounded-xl mt-2 focus:bg-orange-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16" className='ml-4'>
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                 <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
            <div className='ml-2 text-red-500'>Системээс гарах</div>
            </div>
            <div className='h-[7%] w-[100%] bg-orange-500 mt-4 text-white rounded-xl flex flex-row items-center justify-between'>
                <div className='ml-4'>Design by Narka</div>
                <div className='mr-4'>v 1.0.0</div>
                </div>
        </div>

        <div className="h-[97vh] w-[80%] bg-white rounded-xl flex flex-col items-center">
        <button onClick={() => setCategory("clothes")} className="button-style">Clothes</button>
        <button onClick={() => setSearch("instruments")} className="button-style mt-2">Instruments</button>
        <button onClick={() => setSearch("tools")} className="button-style mt-2">Tools</button>
        <button onClick={() => setSearch("groups")} className="button-style mt-2">Groups</button>
        <button onClick={() => setSearch("provinces")} className="button-style mt-2">Provinces</button>
        <button onClick={() => setSearch("figures")} className="button-style mt-2">Figures</button>
        <button onClick={() => setSearch("attractions")} className="button-style mt-2">Attractions</button>
        <div className="mt-4 w-full px-4">
        {loading ? (
  <p>Loading...</p>
) : filteredData.length > 0 ? (
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredData.map((item, index) => (
      <li key={index} className="bg-gray-100 p-4 rounded-xl shadow">
        <p className="text-lg font-semibold">{item.name}</p>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto mt-2 rounded"
          />
        )}
      </li>
    ))}
  </ul>
) : (
  <p>No data available for "{query}"</p>
)}


</div>
<input 
  type="text" 
  value={query} 
  onChange={(e) => setQuery(e.target.value)} 
  placeholder="Search items..." 
  className="p-2 border rounded mt-4"
/>
        </div>

      </div>
    );
}