import { notFound } from 'next/navigation';

const LocationValidityCheck = async ({ params } : { params : any}) => {

    const { page } = await params;

    if(page) return notFound();

  return null;
}

export default LocationValidityCheck