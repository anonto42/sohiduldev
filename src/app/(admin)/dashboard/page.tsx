"use client";
import AddProject from '@/components/Deshbord_Items/AddProject';
import Bar from '@/components/Deshbord_Items/Bar';
import Messages from '@/components/Deshbord_Items/Messages';
import ProjectOpt from '@/components/Deshbord_Items/ProjectOpt';
import React, { useState } from 'react';

export interface BarType {
  first: boolean;
  second: boolean;
  third: boolean;
}

const Page = () => {
  const [barObject, setBarObject] = useState<BarType>({
    first: true,
    second: false,
    third: false,
  });

  return (
    <div className="flex">
      <Bar setWork={setBarObject} work={barObject} />
      {
        barObject.first ? <Messages /> : 
        barObject.second ? <ProjectOpt /> : 
        barObject.third? <AddProject/> : "" 
      }
    </div>
  );
};

export default Page;
