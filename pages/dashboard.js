import { Geist, Geist_Mono } from "next/font/google";
import React from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [Grid, setGrid] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const result = await response.json();
                setData(result);
                setLoading(false);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const filteredData = data?.clothes?.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

    const router = useRouter();
    const Back = () => {
      router.push("/semester-4/lab-1");
    };
    const Back1 = () => {
      router.push("/semester-4/lab-0");
    };
    const Back2 = () => {
      router.push("/semester-4/lab-3");
    };


  return (
    <div className="h-full flex flex-row gap-x-4 p-4 bg-gray-300 font-bold text-black">
    <div className="h-[97vh] w-[20%] bg-white p-4 flex flex-col items-center rounded-xl text-black">
        <div className='flex flex-col items-center'>
            <img src='https://nhs.edu.mn/favicon.ico' width={120}/>
            <div className='text-purple-600 mt-4 font-bold'>11В Г.Наран-Эрдэнэ</div>
         </div>    
        <div className='h-[65%] w-[90%] mt-8'>
                <button onClick={Back1} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl">
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
                
                <button onClick={Back} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p className='ml-2 text-semibold'>lab-2</p>
                </button>
                
                <button onClick={Back2} className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
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
      <div className='min-h-screen w-full p-8'>
            <div className="flex items-center gap-4 mb-6 ml-4">
                <input
                    type="text"
                    placeholder="Search clothes..."
                    className="p-2 border border-gray-300 rounded w-96 bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={() => setGrid(prev => !prev)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Grid
                </button>
            </div>

            <div
                className={`transition-all duration-300 w-full
        ${Grid
            ? 'flex flex-col gap-4 overflow-x-auto'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}
                `}
            >
                {loading ? (
                    <div className={`${inter.className} text-xl text-gray-400`}>
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : filteredData.length === 0 ? (
                    <div className="text-xl text-center text-gray-500">
                        No match
                    </div>
                ) : (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                bg-purple-800 p-4 rounded-lg flex
                                ${Grid ? 'flex-row w-full h-40' : 'flex-col w-full h-96'}
                                justify-start items-center gap-4
                            `}
                        >
                            <img
                                src={item.images[0]}
                                alt={item.name}
                                width={Grid ? 80 : 120}
                                height={Grid ? 80 : 120}
                                className="rounded-lg"
                            />
                            <div className="text-center md:text-left">
                                <h2 className={`${inter.className} ${Grid ? 'text-xl' : 'text-2xl'} text-white`}>
                                    {item.name}
                                </h2>
                                <p className={`${inter.className} text-white mt-2`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>
  );
}