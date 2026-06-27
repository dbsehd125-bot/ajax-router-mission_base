import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function PostEdit({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  if (!post) {
    return (
      <section>
        <h2>글을 찾을 수 없습니다.</h2>
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title, content };
    onUpdate(updatedPost);
    navigate(`/posts/${post.id}`);
  };

  return (
    <section>
      <h2>글 수정</h2>
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
        <button type="submit">수정 완료</button>
      </form>
    </section>
  );
}
