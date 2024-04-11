import { useContext, useEffect, useState } from "react";
import "./Posts.css";
import { AppContext } from "../../app/context/context";
import { NavLink } from "react-router-dom";

export const Posts = () => {
  // AppContext берем из ../../app/context/context и извлекаем из него значения
  const { categories, posts, setOrdered, addToCart } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState(0);

  const sortByTitleLength = (a, b) => {
    if (sort == "") {
      return 0;
    } else if (sort === "asc") {
      return a.title.length - b.title.length;
    } else {
      return b.title.length - a.title.length;
    }
  };

  return (
    <>
      <input
        type="text"
        className="input"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="button-wrapper">
        <button onClick={() => setSort("asc")} className="button">
          По возрастанию
        </button>
        <button onClick={() => setSort("desc")} className="button">
          По убыванию
        </button>
        <button onClick={() => setSort("")} className="button">
          Не сортировать
        </button>
      </div>

      <div className="button-wrapper">
        <button onClick={() => setFilter(0)} className="button">
          Все
        </button>
        {categories.map((category) => (
          <button
            onClick={() => setFilter(category)}
            key={category}
            className="button"
          >
            {category}
          </button>
        ))}
      </div>
      {posts
        .filter((post) =>
          post.title.toLowerCase().startsWith(search.toLowerCase())
        )
        .filter((post) => (filter == 0 ? true : post.userId == filter))
        .sort(sortByTitleLength)
        .map((post) => (
          <div key={post.id} className="card">
            <NavLink to={`/cart/${post.id}`}>id: {post.id}</NavLink>
            <p>user: {post.userId}</p>
            <p>
              {post.title}: {post.title.length}
            </p>
            <p>{post.body}</p>
            {post.id % 5 === 0 && !post.ordered && (
              <button className="button" onClick={() => setOrdered(post.id)}>
                Заказать
              </button>
            )}
            {post.id % 5 === 0 && post.ordered && (
              <div className="button">В заказах</div>
            )}

            {post.id % 5 !== 0 && !post.inCart && (
              <button className="button" onClick={() => addToCart(post.id)}>
                Добавить в корзину
              </button>
            )}
            {post.id % 5 !== 0 && post.inCart && (
              <div className="button">В корзине</div>
            )}
          </div>
        ))}
    </>
  );
};
