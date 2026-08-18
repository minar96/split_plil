import Image from "next/image";
import {useState} from "react";
export default function Home() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [box, setBox] = useState(null);
  const [completedBox, setCompletedBox] = useState(null);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-white">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white bg-white sm:items-start">
        <div className="w-full flex flex-col items-center justify-center gap-4 sm:items-start border border-gray-300 rounded-lg py-4 relative" >
            <div className="border-b border-gray-300 w-full  my-[5rem]"></div>
            <div className="border-b border-gray-300 w-full mb-[5rem]"></div>
            <div className="border-b border-gray-300 w-full mb-[5rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[5rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[10rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[15rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[20rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[25rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[30rem]"></div>
            <div className="border-l border-gray-300 w-full w-[3px] h-full absolute left-0 top-0 ms-[35rem]"></div>
            
        </div>

      </main>
    </div>
  );
}
