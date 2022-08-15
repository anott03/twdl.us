import { useNavigate } from "react-router-dom";

const NotFound: () => JSX.Element = () => {
  const navigate = useNavigate();

  const goHome: () => void = () => {
    navigate("/");
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-800 justify-center">
      <h1 className="text-7xl text-slate-500">404</h1>
      <h1 className="text-3xl text-slate-500">The page you are looking for cannot be found.</h1>
      <button className="text-3xl text-slate-500 border border-slate-500 p-2 m-2 hover:bg-slate-500 hover:text-slate-800" onClick={goHome}>Go home</button>
    </div>
  );
}

export default NotFound;
