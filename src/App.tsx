import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PosterPage from "./pages/PosterPage";

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
