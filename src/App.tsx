import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { BaerekraftPage } from './BaerekraftPage';
import { HomePage } from './HomePage';

/** Ruller til toppen ved rutebytte (unngår at /baerekraft åpner nederst etter klikk fra bunnen av forsiden). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baerekraft" element={<BaerekraftPage />} />
      </Routes>
    </BrowserRouter>
  );
}
