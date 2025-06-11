import React from 'react'

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
   <div className='my-2'>
    <div className='flex'>
        {tabs.map((tab) => (
            <button 
              key={tab.label}
              className={`relative px-3 md:px-4 py-2 text-sm font-medium ${
                activeTab === tab.label
                ? "text-teal"
                :"text-gray-500 hover:text-gray-700"
              } cursor-pointer`}
              onClick={()=> setActiveTab(tab.label)}
              >
                <div className='flex items-center'>
                    <span className='text-[14px] font-semibold text-teal-700'>{tab.label}</span>
                </div>
                {activeTab === tab.label && (
                    <div className='absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-teal-500/85 to-teal-700'></div>
                )}
              </button>
       ) )}
    </div>
   </div>
  )
};

export default Tabs;