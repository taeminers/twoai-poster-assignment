import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './pages/home-page';
import NotFound from './pages/not-found';
import PosterPage from './pages/poster-page';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<PosterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
