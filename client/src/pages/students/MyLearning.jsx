import React from 'react'
import Cource from './Cource'

const MyLearning = () => {
    const isLoading=false
    const mylearnings=[1,2,3,4,5]
  return (
    <div className='max-w-4xl mx-auto my-24 px-4 md:px-0'>
        <h1 className='font-bold text-2xl'>MY LEARNING</h1>
        <div className='my-5'>
            {
                isLoading?(
                    <MyLearningSkeleton/>
                ):mylearnings.length===0?(<p>You are not enroll in any cources</p>):(
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                             [1,2].map((cource,index)=><Cource key={index} cource={cource}/>)   
                        }
                    </div>
                   
                )
            }
        </div>
    </div>
  )
}

export default MyLearning
const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
  );