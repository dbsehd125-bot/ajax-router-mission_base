import { Link } from "react-router";

export default function Posts({ posts }) {
  return (
    <section>
      <h2>글 목록</h2>
      {posts.length === 0 ? (
        <p>글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link> {post.createdAt}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
