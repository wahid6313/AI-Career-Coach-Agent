import { Button } from '@/components/ui/button';

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface TOOL {
        name: string,
        desc: string,
        icon: string,
        button: string,
        path: string
}

type AiToolTypes = {
    tool: TOOL;
}

function AiToolCard({tool}: AiToolTypes) {
  return (
    <div className='border p-3 rounded-lg'>
    < Image src={tool.icon} width={40} height={40} alt={tool.name} />
    <h2 className='font-bold mt-2'>{tool.name}</h2>
    <p className='text-gray-400'>{tool.desc}</p>
    <Link href={tool.path} >
    <Button className='w-full mt-3'>{tool.button}</Button>
    </Link>
    
   </div>
  )
}

export default AiToolCard