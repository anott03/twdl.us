import "./ShortenerRedirect.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ShortenerRedirect: () => JSX.Element = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ redirectUrl, setRedirectUrl ] = useState<string|null>(null);

  useEffect(() => {
    const opts: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ id })
    }

    fetch("http://localhost:8787/url", opts)
      .then(async (res) => {
        let json: { redirectUrl: string } = await res.json();

        if (!json.redirectUrl) {
          navigate("/shortener")
        }

        setRedirectUrl(json.redirectUrl);
      })
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-800 justify-center">
      <h1 className="text-2xl text-white">You are being redirected to</h1>
      <a className="text-4xl text-blue-300 cursor-pointer hover:underline" href={redirectUrl || ""}>{redirectUrl}</a>
      <h1 className="text-2xl text-white">Click the link to proceed.</h1>
    </div>
  );
}

export default ShortenerRedirect;
