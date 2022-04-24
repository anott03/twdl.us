import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils/trpc';

const UrlShortener: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'amitav' }]);

  return (<>
    <Head>
      <title>Url Shortener | TWDL</title>
    </Head>
    <div className="text-2xl h-screen w-screen flex flex-col p-96">
      <div className='text-gray-800 w-full h-full flex flex-col'>
        <p className='text-gray-100'>Enter a URL:</p>
        <div className='w-full flex flex-row bg-red-800 p-1 justify-between'>
          <div className='flex-1 bg-green-100'>
            <input type="text text-gray-800 border-none w-full" />
          </div>
          <button className="text-gray-100 flex-none">Go</button>
        </div>
      </div>
    </div>
  </>)
}

export default UrlShortener
