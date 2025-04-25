import { useState } from "react";

const Data = [
  {
    id: 1,
    name: "iPhone XS",
    color: "Gold",
    price: 1000000,
    image: "https://1210766573.rsc.cdn77.org/temp/1710149016_0132e3b43ec9b92720d1669b871f4956.jpg",
    item: {
      id: 1,
      name: "Marvel Case, Charger",
      price: 200000,
    }
  },
  {
    id: 2,
    name: "Airpod pro",
    color: "White",
    price: 250000,
    image: "https://ringke.co.in/cdn/shop/files/61lsJmHc2KL._SL1500.jpg?v=1691487466",
    item: {
      id: 1,
      name: "Blue Case",
      price: 20000,
    }
  },
  {
    id: 3,
    name: "Msi thin 15",
    color: "Black",
    price: 3000000,
    image: "https://my-store.msi.com/cdn/shop/files/Thin15B12UX_1_b7263dac-f7a7-4964-b794-1b7f995c96b5.png?v=1736154441",
    item: {
      id: 1,
      name: "Mouse VXE",
      price: 100000,
    }
  },
  {
    id: 4,
    name: "Bike",
    color: "Black",
    price: 200000,
    image: "https://giantindia.com/cdn/shop/files/MY25_Talon_29_1_Charcoal_10848e4b-f9bd-43fc-8b57-30dbb4ecc318.png?v=1743448092",
    item: {
      id: 1,
      name: "Tire",
      price: 50000,
    }
  },
  {
    id: 5,
    name: "Headphone Earpad",
    color: "Black and Gold",
    price: 250000000,
    image: "https://cdn.mos.cms.futurecdn.net/FqRbifB3n4pA85smeB4Z57-600-80.jpg.webp",
    item: {
      id: 1,
      name: "Charger",
      price: 200000,
    }
  }
];

export default function Lab1() {
  const [filter, setFilter] = useState("");
  const filteredData = Data.filter((element) => {
      return filter.toLocaleLowerCase() === ""
        ? element
        : element.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    });
  return(
    <div className="h-screen flex flex-row gap-x-4 p-4 bg-gray-300 font-bold text-black">
      <div className="h-[97vh] w-[20%] bg-white p-4 flex flex-col items-center rounded-xl">
        <div className='flex flex-col items-center'>
            <img src='https://nhs.edu.mn/favicon.ico' width={120}/>
            <div className='text-purple-600 mt-4 font-bold'>11В Г.Наран-Эрдэнэ</div>
         </div>    
        <div className='h-[65%] w-[90%] mt-8'>
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z"/>
                </svg>
                <p className='ml-2 text-semibold'>Хянах самбар</p>
                </button>

                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16" className='text-black ml-4' >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                <p className='ml-2 text-semibold'>Хүргэлт</p>
                </button>
                
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p className='ml-2 text-semibold'>Тооцоо</p>
                </button>
                
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p className='ml-2 text-semibold'>Хэрэглэгчид</p>
                </button>
                
                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16" className='text-black ml-4'>
                     <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                     <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                <p className='ml-2 text-semibold'>Салбар</p>
                </button>

                <button className="h-[10%] w-[100%] flex flex-row items-center focus:bg-orange-500 focus:text-white cursor-pointer rounded-xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                </svg>
                <p className='ml-2 text-semibold'>Бүс</p>
                </button>

                <button className="h-[10%] w-[100%] flex flex-row items-center cursor-pointer rounded-xl mt-2 focus:bg-orange-500 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16" className='text-black ml-4'>
                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                </svg>
                <p className='ml-2 text-semibold'>Үүрэг</p>
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
        <div className='h-[7%] w-[99%] mt-1.5 flex flex-row'>
            <div className='h-[100%] w-[25%] bg-gray-300 rounded-2xl text-red-500 font-bold flex justify-center items-center'> Харилцагчид</div>
            <input 
                type="text" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                 placeholder="Бараа хайх..." 
                 className="w-[45%] h-[100%] bg-gray-200 rounded-2xl ml-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {filteredData.length === 0 ? (
              <div className="text-center text-gray-500 flex justify-center items-center">No items found</div>
                ) : (
              <div className="flex flex-wrap justify-center mt-4">
              {filteredData.map(item => (
              <div key={item.id}></div>
            ))}
        </div>)}



            <div className='h-[100%] w-[5%] bg-orange-400 ml-4 rounded-2xl flex justify-center items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16" className='text-orange-700'>
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                </svg>
            </div>
            <div className='h-[100%] w-[22%] bg-orange-600 ml-4 rounded-2xl flex justify-center items-center text-white cursor-pointer'>Харилцагчид Бүртгэх</div>
        </div>
        <div className='w-[99%] h-[60%] bg-gray-300 mt-1.5 flex flex-col items-center rounded-2xl'>
            <div className='bg-white mt-2 w-[99%] h-[12%] rounded-3xl shadow-md flex flex-row items-center'>
            <input
                type="checkbox"
                className="ml-4 w-6 h-6 bg-none border-2 border-orange-400 rounded-md cursor-pointer"
            />
              <div className=' w-70 h-[100%] ml-16 flex flex-row items-center'>Огноо
                <div className='flex flex-col ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                         <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>

            <div className=' w-90 h-[100%]  flex flex-row items-center'>Нэр
                <div className='flex flex-col ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                         <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
            <div className=' w-60 h-[100%]  flex flex-row items-center'>Өнгө
                <div className='flex flex-col ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                         <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
            <div className='w-50 h-[100%]  flex flex-row items-center'>Үнэ
                <div className='flex flex-col ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                         <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
            <div className=' w-100 h-[100%]  flex flex-row items-center'>Бэлэг
                <div className='flex flex-col ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                         <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
            <div className='w-40 h-[100%]  flex flex-row items-center'>Үйлдэл</div>
            </div>







{filteredData.map((item, index) => (
  <div key={item.id} className='bg-white mt-2 w-[99%] h-[12%] rounded-3xl shadow-md flex flex-row items-center font-medium'>
    <input
      type="checkbox"
      className="ml-4 w-6 h-6 bg-none border-2 border-orange-400 rounded-md cursor-pointer"
    />
    <div className='w-70 h-[100%] ml-16 flex flex-row items-center'>
      2025-04-25 00:00
    </div>
    <div className='w-90 h-[100%] flex flex-row items-center'>
      {item.name}
    </div>
    <div className='w-60 h-[100%] flex flex-row items-center'>
      {item.color}
    </div>
    <div className='w-50 h-[100%] flex flex-row items-center'>
      {item.price.toLocaleString()}₮
    </div>
    <div className='w-100 h-[100%] flex flex-row items-center'>
      {item.item.name}
    </div>
    <div className='w-40 h-[100%] flex flex-row items-center'>
      <div className='flex flex-row'>
        <div className='h-10 w-10 bg-yellow-500 rounded-xl flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
          </svg>
        </div>    
        <div className='h-10 w-10 bg-red-500 rounded-xl flex justify-center items-center ml-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
))}
        <div className='h-[15%] w-[99%] bg-white rounded-2xl mt-4 flex items-center flex-col justify-center'>
            <div className='h-[30%] w-[99%] font-medium text-red-500 flex flex-row justify-between'>
                <div className='w-[20%]'>Нийт 0 мөр сонгосон байна</div>
                <div className='w-[80%] flex flex-row justify-end'>
                    <div className='w-[26%]'>Нэг хуудсанд харуулах мөрийн тоо</div>
                    <div className='w-[6%] h-[100%] border-2 border-red-500 ml-8 flex flex-row justify-between items-center rounded-sm'>100
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='h-[60%] w-[99%] flex flex-row items-center'>
                <div className='h-[100%] w-[100%] flex flex-row items-center justify-between'>

                <div className='w-[100%] h-[100%] flex flex-row items-center'>
                    <div className='w-[10%] h-[95%] bg-orange-500 rounded-xl flex flex-row justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                        <div className='ml-2 text-white'>Устгах</div>
                    </div>
                    <div className='w-[14%] h-[95%] bg-orange-500 rounded-xl ml-4 flex flex-row justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        <div className='ml-2 text-white'>Шинэ хүсэлт</div>
                    </div>
                </div>
                <div className='w-[12%] h-[95%] flex flex-row justify-between items-center'>
                    <div className='w-[30%] h-[90%] bg-gray-300 rounded-sm flex justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </div>
                    <div className='w-[30%] h-[90%] bg-orange-500 rounded-sm flex justify-center items-center text-white text-xl'>1</div>
                    <div className='w-[30%] h-[90%] bg-gray-300 rounded-sm flex justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
            </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
}