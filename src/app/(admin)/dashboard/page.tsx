"use client"
import Bar from '@/components/Deshbord_Items/Bar';
import Messages from '@/components/Deshbord_Items/Messages';
import ProjectOpt from '@/components/Deshbord_Items/ProjectOpt';
import React, { useState } from 'react';

const page = () => {
  const [opt,setOpt] = useState(true);
  return (
    <div className='flex'>
      {/* side bar for the univarsel think */}
      <Bar setWork={setOpt} />
      {/* messages options */}
      { opt? <Messages /> : <ProjectOpt /> }
    </div>
  )
}

export default page