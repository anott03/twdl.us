import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { trpc } from '@/utils/trpc';

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="border-sold border-2 border-red-200 p-2">
    <p>Error: {message}</p>
  </div>
}

const Body = ({ children }: any) => {
  return <div className='w-screen h-screen flex flex-col justify-center items-center'>
    {children}
  </div>
}

const UrlRedirect: NextPage = () => {
  const router = useRouter();
  const { urlId } = router.query;
  const { data, isLoading } = trpc.useQuery(['get-url', { id: urlId }]);

  if (typeof urlId !== 'string') return <Body><ErrorMessage message="Invalid URL"/></Body>;
  if (isLoading) return <div>Loading...</div>
  if (data) {
    if (!data.success) {
      return <Body><ErrorMessage message={data.errorMsg || ""} /></Body>;
    }
  }
  return <Body>
    <div className="flex flex-col items-center text-center">
      <p className="text-xl">You are being directed to</p>
      <a className="text-2xl text-blue-400" href={data?.redirectUrl}>{data?.redirectUrl}</a>
      <p className="text-xl max-w-md">To proceed, simply click on the link. Otherwise, you can close this tab or go back.</p>
    </div>
  </Body>
}

export default UrlRedirect;
