import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Shortener from './pages/url-shortener/Shortener';

export default function Router() {
  return <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route
        path="/shortener"
        element={<Shortener />}
      />
    </Routes>
  </BrowserRouter>
}
