import React,{useState}from 'react'
import { LuCheck, LuPencil } from 'react-icons/lu'


const TitleInput = ({title, setTitle}) => {
    const [showInput, setShowInput] = useState(false);


  return <div className='flex items-center gap-3'>
    {showInput ? (
        <>
          <input 
            type="text"
            value={title}
            onChange={(target) => setTitle(target.value)}
            className='text-sm md:text-[17px] bg-transparent outline-none text-black font-semibold border-b border-teal-200 pb-1'
            placeholder='Enter resume title'
            />
            <button className='cursor-pointer p-1 rounded-full hover:bg-teal-100 transition-colors duration-200 ease-in-out'>
                <LuCheck 
                    className='text-teal-500 text-lg'
                    onClick={() => setShowInput((prevState) => !prevState)}
                />

            </button>
        </>
    ) : (
        <>
          <h2 className='text-sm md:text-[17px] font-semibold'>{title}</h2>
          <button className='cursor-pointer p-1 rounded-full hover:bg-teal-100 transition-colors duration-200 ease-in-out'>
            <LuPencil 
                className='text-teal-500 text-lg'
                onClick={() => setShowInput((prevState) => !prevState)}
            />
          </button>
        </>
       ) }
  </div>
};

export default TitleInput;