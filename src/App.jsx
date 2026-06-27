import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";
import NotFound from "./pages/NotFound";

function App() {

  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;

    fetch("/data/blog.json")
      .then(res => res.json())
      .then(result => {
        if (alive) {
          console.log(result);
          setPosts(result);
          setLoaded(true);
        }
      });

    return () => {
      alive = false;
    };
  }, []);

  // 8단계: 글 삭제
  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  // 9단계: 글 추가
  const handleAdd = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // 10단계: 글 수정
  const handleUpdate = (updatedPost) => {
    setPosts(posts.map(p => (p.id === updatedPost.id ? updatedPost : p)));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="posts/new"
          element={<PostNew posts={posts} onAdd={handleAdd} />}
        />
        <Route
          path="posts/:id/edit"
          element={<PostEdit posts={posts} onUpdate={handleUpdate} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
