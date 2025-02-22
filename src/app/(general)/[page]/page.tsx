import { notFound } from 'next/navigation';
import React from 'react';

const page = ({ params } : { params : any}) => {

    const { page } = params;

    console.log(page)

    if(page) return notFound();

  return (
    <div>page</div>
  )
}

export default page