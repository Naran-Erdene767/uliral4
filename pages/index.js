  import Image from "next/image";
  import { Geist, Geist_Mono } from "next/font/google";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function Home() {
    return (
      <div className="h-max w-screen bg-blue-400 flex flex-col">
        <div className="h-20 w-screen bg-white absolute flex flex-row items-center justify-evenly fixed top-0 right-0 left-0">
            <img
              src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
              alt="Logo"
              width={130}
              height={80}
              className="rounded-2xl"
            />
          <div className="flex flex-row w-[450px] space-x-5 ml-48">
            <div className="cursor-pointer hover:text-yellow-300 font-medium">Үйлчилгээ</div>
            <div className="cursor-pointer hover:text-yellow-300 font-medium">Давуу тал</div>
            <div className="cursor-pointer hover:text-yellow-300 font-medium">Мэдээ</div>
            <div className="cursor-pointer hover:text-yellow-300 font-medium">Хамтран ажиллах</div>
          </div>
        </div>
        <div className="h-[950px] w-screen bg-amber-100 flex flex-col items-center">
          <div className="text-3xl text-black-500 mt-36">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</div>
          <img width={1000} src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"/>
          <div className="flex flex-row space-x-4">
            <div><img width={150} src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png"/></div>
            <div><img width={150} src="https://www.toki.mn/wp-content/uploads/2021/01/android.png"/></div>
          </div>
        </div>
        <div className="h-screen w-screen bg-white flex flex-row items-center">
          <div><img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"/></div>
          <div className=""><p className="text-3xl font-bold text-yellow-500">Toki Service</p><p className="mt-4">Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний <br/> төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд <br/> хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах <br/> боломжтой.</p></div>
        </div>
        <div className="h-screen w-screen bg-yellow-100 flex flex-row items-center">
          <div className=""><p className="text-3xl font-bold text-yellow-500">Toki pay</p><p className="mt-4 text-end">Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч <br/> юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг <br/> баримтуудаа нэг дор хадгалаарай.</p></div>
          <div><img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"/></div>
        </div>
        <div className="h-screen w-screen bg-zinc-100 flex flex-row items-center">
          <div><img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"/></div>
          <div className=""><p className="text-3xl font-bold text-yellow-500">Toki Shop</p><p className="mt-4">Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, <br/> нэг дороос шууд захиалах боломжтой.</p></div>
        </div>
        <div className="h-screen w-screen bg-purple-200 flex flex-col">
          <div className="h-[500px] w-screen bg-white flex flex-col items-center">
            <p className="text-3xl font-bold text-yellow-500 mt-28">Toki апп өдөр бүр танд тусална</p>
            <p className="text-center mt-8">Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг <br/> хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>
          </div>
          <div className="h-[170px] w-screen bg-amber-100 flex justify-center">
            <div className="h-12 w-44 bg-yellow-300 rounded-3xl mt-4 flex items-center justify-center font-semibold text-white">Давуу Тал</div>
          </div>
          <div className="h-[280px] w-screen bg-black text-gray-200 flex flex-row justify-center">
            <div className="h-10 w-24 bg-transparent mt-20 mr-48">
              <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" width={100}/>
            </div>
            <div className="h-36 w-96 bg-transparent flex-col text-xs mr-48 mt-16">
              <p className="cursor-pointer hover:text-yellow-300">Түгээмэл асуулт</p>
              <p className="flex flex-row mt-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="ml-2">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
                
              </p>
              <p className="flex flex-row">
                <p className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className="ml-2">77074477, 4477</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className="ml-2">info@toki.mn</p>
                </p>
                
                
              </p>
              <p className="mt-4">Copyright © 2022 | Toki.mn</p>
            </div>
            <div className="h-4 w-12 bg-transparent mt-16">
              <p className="cursor-pointer hover:text-yellow-300 text-xs">Нууцлал</p>
            </div>
            <div className="h-6 w-16 bg-transparent flex flex-row justify-around mt-24 ml-10">
            <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-5 hover:text-blue-400 cursor-pointer">
            <path fill="currentColor"
                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
            </path>
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 hover:text-orange-400 cursor-pointer">
            <path fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
        </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
