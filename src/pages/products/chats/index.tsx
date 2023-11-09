import type { NextPage } from "next";


const Chats: NextPage = () => {
    return (
        <div  className="py-10 divide-y-[1px]">
        {[1,2,3,4,5,6].map((_,i) => (  
         <div key={i} className="flex  cursor-pointer mt-1 px-4 py-3 items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300"/>
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">내일 2시에 만나요!&rarr;</p>
          </div>
        </div>
        ))}
        </div>
        )
}
export default Chats;