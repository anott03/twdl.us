import { useState } from "react";

const Shortener: () => JSX.Element = () => {
  const [ url, setUrl ] = useState("");
  const [ shortenedUrl, setShortenedUrl ] = useState(null);

  const shortenUrl = (e: any) => {
    e.preventDefault();

    const opts: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        url
      })
    }

    fetch("http://localhost:8787/generate", opts)
      .then(res => res.json())
      .then(data => console.log);
  }

  return (
    <div className="w-screen h-screen p-5 bg-slate-800 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-white">Url Shortener</h1>
      <div className="p-2 border-solid border-[1px] border-white flex flex-row w-full max-w-lg">
        <input
          className="bg-inherit text-white py-5 px-3"
          style={{flex: 0.95}}
          placeholder="enter a url here"
          value={url} onChange={(e: any) => setUrl(e.target.value)}
        />
        <button className="text-white m-2" onClick={shortenUrl}>Go</button>
      </div>
      { shortenedUrl &&
        <div className="p-3 m-3 border-solid border-[1px] border-white w-full max-w-lg">
          <input className="bg-inherit text-white px-3" disabled value={shortenedUrl}/>
        </div> }
    </div>
  );
}

export default Shortener
