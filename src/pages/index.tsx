import Image from 'next/image'
import { Inter } from 'next/font/google'
import { link } from 'fs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-slate-400 xl:place-content-center py-20 px-10 lg:grid-cols-2 xl:grid-cols-3 grid gap-10 min-h-screen'>
      <div className='bg-white dark:bg-black flex flex-col p-10 rounded-2xl'>
        <span className='font-semibold dark:text-white text-3xl'>Select Items</span>
        <ul>
          {[1, 2, 3, 4,5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50"
            >
              <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
              <span className="font-semibold dark:text-gray-100">$19</span>
            </div>
          ))}
        </ul>
        <ul className='list-none'>
        {["a","b","c",""].map((c,i)=> 
        <li className='bg-red-500 py-2 empty:bg-blue-500' key={i}>
          {c} 
        </li>
        )}
        </ul>
              
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>  
          <span className=' font-semibold'>$10</span>
        </div>
        <div className='mt-5 bg-blue-500 text-white p-5 text-center rounded-xl
          hover:bg-black hover:text-red-200
          active:bg-yellow-500 focus:bg-red-500
          dark:bg-black dark:border-white dark:border
          dark:hover:text-black dark:hover:bg-white
        '>
            Checkout
        </div>
      </div>
      
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 portrait:bg-black landscape:bg-teal-500 p-6 pb-14 xl:pb-52">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-black" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      
      <div className='bg-white p-6 rounded-3xl shadow-sm lg:col-span-2 xl:col-span-1'>
          <div className='flex justify-between items-center'>
            <span>⬅️</span>
            <div className='space-x-3'>
              <span>⭐️4.9</span>
              <span className='shadow-xl p-2 rounded-md'>💖</span>
            </div>
          </div>
          <div className='bg-zinc-400 h-72 mb-5'/>
          <div className='flex flex-col'>
              <span className='font-medium mb-1.5 text-xl'>Swoon Lounge</span>
              <span className='text-xs text-gray-500'>Chair</span>
            <div className='mt-3 mb-5 flex justify-between items-center'>
                <div className='space-x-2'>
                  <button className='w-5 h-5 rounded-full bg-yellow-500  focus:ring-2 ring-offset-2 ring-yellow-500 transition'/>
                  <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500'/>
                  <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500'/>
                </div>
                <div className='flex items-center space-x-5'>
                  <button className='p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500'>-</button>
                  <span>1</span>
                  <button className='p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500'>+</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-medium text-2xl'>$450</span>
              <span className='bg-blue-500 py-2 px-5 text-center text-xs text-white rounded-lg'>Add to Cart</span>
            </div>
          </div>
      </div>

      <div className='bg-white p-10 rounded-2xl '>

      <form className="flex flex-col space-y-2  p-5 ">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer border-gray-400 rounded-md "
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome username
      </span>
      <span className="hidden peer-hover:block peer-hover:text-amber-500">
        Hello
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form> 
      </div>


      <div className='flex bg-white flex-col space-y-2 p-5'>
           <p className='first-letter:text-7xl first-letter:hover:text-purple-400'> Hello is oooops</p>
           
        </div>  
    </div>
  )
}
