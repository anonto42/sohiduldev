import { notFound } from 'next/navigation';

interface Params{
  page?: string;
}

const LocationValidityCheck = ({ params } : { params : Params}) => {

    const { page } = params;

    if(page) return notFound();

  return null;
}

export default LocationValidityCheck