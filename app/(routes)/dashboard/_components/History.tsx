"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

const History = () => {
    const [userHistory, setUserHistory] = useState([]);
  return (
    <div className='p-5 mt-7 border rounded-xl'>
        <h2 className='font-bold text-lg'>Previous History</h2>
        <p className='text-sm text-gray-400'>What Your previously work on, You can find here</p>
        {
            userHistory?.length == 0 &&
             <div className='flex flex-col items-center justify-center mt-6'>
                <Image src={"/idea.png"} alt="bulb" width={50} height={50}/>
                <h2 className='mt-9'>You do Not Have any History</h2>
                <Button className='mt-4 mb-2'>Explore AI Tools</Button>
            </div>
            
        }
    </div>
  )
}

export default History