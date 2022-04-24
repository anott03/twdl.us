import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils/trpc';
import { useState } from 'react';

const UrlShortener: NextPage = () => {
  const generateUrlMutation = trpc.useMutation(['generate-url']);
  let [ urlReady, setUrlReady ] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();
    const url = encodeURI(e.target.urlInput.value);

    generateUrlMutation.mutate({ url });
    console.log(generateUrlMutation.data);
    setUrlReady(true);
  }

  return (<>
    <Head>
      <title>Url Shortener | TWDL</title>
    </Head>
    <div className="text-2xl h-screen w-screen flex flex-col justify-center items-center">
      <form onSubmit={submitForm} className='text-gray-800 flex flex-col border-solid border-2 border-gray-200 p-5 justify-between max-w-2xl max-h-56 w-full h-full'>
        <p className='text-gray-100 text-2xl'>Enter a URL:</p>
        <input id="urlInput" className="text text-gray-800 border-none w-full" style={{padding: '0 0.5rem'}}/>
        <button type="submit" className="text-gray-100 bg-blue-400 flex-none">Go</button>
        { urlReady &&
          <input value={generateUrlMutation.data?.generatedUrl ?? ""} disabled className="text text-gray-800 border-none w-full" style={{padding: '0 0.5rem'}}/>
        }
      </form>
    </div>
  </>)
}

export default UrlShortener
