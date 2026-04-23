import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BaerekraftPage } from './BaerekraftPage';
import { HomePage } from './HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baerekraft" element={<BaerekraftPage />} />
      </Routes>
    </BrowserRouter>
  );
}
