import { useParams, useNavigate, Link } from "react-router";

export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <section>
        <h2>글을 찾을 수 없습니다.</h2>
        <Link to="/posts">목록으로 돌아가기</Link>
      </section>
    );
  }

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(post.id);
      navigate("/posts");
    }
  };

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.createdAt}</p>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>수정하기</Link>
      <button onClick={handleDelete}>삭제하기</button>
    </section>
  );
}
