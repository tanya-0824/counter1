import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='flex flex-col gap-y-24 h-screen mx-auto items-center justify-center'>
      <div className='text-8xl font-bold text-cyan-800'>
        {count}
      </div>
     <div className='flex gap-x-6'>
     <div onClick={() => setCount(count-1)} className='shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-[100px] h-[80px] flex justify-center items-center rounded-lg  text-orange-500 font-extrabold  text-5xl hover:cursor:pointer'>-</div>
      <div onClick={() => setCount(count+1)} className='shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-[100px]  h-[80px] flex justify-center items-center rounded-lg text-orange-500 font-extrabold text-5xl hover:cursor:pointer'>+</div>
     </div>
    </div>
  )
}

export default Counter;
