"use client";
import AddProject from '@/components/Deshbord_Items/AddProject';
import Bar from '@/components/Deshbord_Items/Bar';
import Messages from '@/components/Deshbord_Items/Messages';
import ProjectOpt from '@/components/Deshbord_Items/ProjectOpt';
import React, { useReducer, useState } from 'react';

export interface BarType {
  first: boolean;
  second: boolean;
  third: boolean;
}

const Page = () => {
  const [reducerValue, forceUpdate] = useReducer( x => x + 1, 0);
  const [reducerValueForProjects, forceUpdateOnProject] = useReducer( x => x + 1, 0);
  const [barObject, setBarObject] = useState<BarType>({
    first: true,
    second: false,
    third: false,
  });

  return (
    <div className="flex">
      <Bar setWork={setBarObject} work={barObject} />
      {
        barObject.first ? <Messages reducer={reducerValue} refresh={forceUpdate} /> : 
        barObject.second ? <ProjectOpt reducer={reducerValueForProjects} refresh={forceUpdateOnProject} /> : 
        barObject.third? <AddProject /> : "" 
      }
    </div>
  );
};

export default Page;
