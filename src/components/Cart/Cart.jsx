import { useContext } from "react";
import { AppContext } from "../../app/context/context";

export const Cart = () => {
  // AppContext берем из ../../app/context/context и извлекаем из него значения
  const { posts } = useContext(AppContext);
  return (
    <div>
      <h2>Корзина</h2>

      {posts
        .filter((post) => post.inCart)
        .map((post) => (
          <div key={post.id} className="card">
            <p>id: {post.id}</p>
            <p>user: {post.userId}</p>
            <p>
              {post.title}: {post.title.length}
            </p>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
