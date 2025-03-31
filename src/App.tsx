import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home-page';
import NotFound from './pages/not-found';
import PosterPage from './pages/poster-page';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<PosterPage />} />
        <Route path="/download" element={<div>Download Page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
