import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../app/context/context";

export const Post = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams();

  const post = posts.find((post) => post.id === +id);

  return !post ? (
    <Navigate to="/" />
  ) : (
    <div key={post.id} className="card">
      <p>id: {post.id}</p>
      <p>user: {post.userId}</p>
      <p>
        {post.title}: {post.title.length}
      </p>
      <p>{post.body}</p>
    </div>
  );
};
