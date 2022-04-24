import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils/trpc';

const UrlShortener: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'amitav' }]);

  return (<>
    <Head>
      <title>Url Shortener | TWDL</title>
    </Head>
    <div className="text-2xl h-screen w-screen flex flex-col justify-center items-center">
      <div className='text-gray-800 flex flex-col border-solid border-2 border-gray-200 p-5 justify-between max-w-2xl max-h-44 w-full h-full'>
        <p className='text-gray-100 text-2xl'>Enter a URL:</p>
        <input type="text text-gray-800 border-none w-full" style={{padding: '0 0.5rem'}}/>
        <button className="text-gray-100 bg-blue-400 flex-none">Go</button>
      </div>
    </div>
  </>)
}

export default UrlShortener
