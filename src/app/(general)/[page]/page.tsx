import { notFound } from 'next/navigation';

const LocationValidityCheck = ({ params } : { params : any}) => {

    const { page } = params;

    if(page) return notFound();

  return null;
}

export default LocationValidityCheck