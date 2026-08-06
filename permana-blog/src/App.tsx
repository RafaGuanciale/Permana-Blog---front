import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogHeader from "./components/Header/BlogHeader.tsx";
import BlogFooter from "./components/Footer/BlogFooter";
import PostPage from "./pages/PostPage.tsx";

function App() {
  return (
    <div className="page">
      <BlogHeader />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:slug" element={<PostPage />}/>
      </Routes>
      <BlogFooter />
    </div>
  );
}

export default App;
