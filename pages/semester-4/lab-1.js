import React from 'react';

const Data = [
  {
    id: 1,
    name: "iPhone XS",
    color: "Gold",
    price: 1000000,
    image: "https://1210766573.rsc.cdn77.org/temp/1710149016_0132e3b43ec9b92720d1669b871f4956.jpg",
    item: {
      id: 1,
      name: "Marvel Case",
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
  return (
    <div className="h-screen flex flex-row gap-x-4 p-4 bg-gray-300">
      <div className="h-[97vh] w-[20%] bg-white p-4">
        <div className='flex flex-col items-center'>
            <img src='https://nhs.edu.mn/favicon.ico' width={120}/>
            <p className='text-purple-600 mt-4 font-bold'>11В Г.Наран-Эрдэнэ</p>
        </div>    
      </div>

      <div className="h-[97vh] w-[80%] bg-white">
        
      </div>
    </div>
  );
}
