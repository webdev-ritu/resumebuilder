import React from 'react'

const StepProgress = ({progress}) => {
  return (
    <div className='w-full bg-teal-50 h-1 overflow-hidden rounded-[2px]'>
        <div className='h-1 bg-linear-to-r from-teal-500/85 to-teal-700 transition-all rounded' style={{width:`${progress}%`}}>

        
        </div>
    </div>
  )
}

export default StepProgress