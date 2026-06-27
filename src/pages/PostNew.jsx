import { useState } from "react";
import { useNavigate } from "react-router";

export default function PostNew({ posts, onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;

    const newPost = {
      id: newId,
      title,
      content,
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAdd(newPost);
    navigate(`/posts/${newId}`);
  };

  return (
    <section>
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">등록</button>
      </form>
    </section>
  );
}
