import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'amitav' }]);

  return (<>
    <Head>
      <title>TWDL</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
    </Head>
    <div className="text-7xl h-screen w-screen flex flex-col justify-center text-center">
      Hello
    </div>
  </>)
}

export default Home
