import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Shortener from './pages/url-shortener/Shortener';
import ShortenerRedirect from './pages/shortener-redirect/ShortenerRedirect';
import NotFound from './pages/not-found/NotFound';

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
      <Route
        path="/u/:id"
        element={<ShortenerRedirect />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
}
