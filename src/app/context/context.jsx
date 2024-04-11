import { createContext, useState, useEffect } from "react";

// создаем контекст posts: [], categories: [] - дефолтные значения
export const AppContext = createContext({ posts: [], categories: [] });

// этой штукой мы обернем наи компоненты внутри App
export const AppContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  // получение данных
  const getPosts = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=30"
    );

    const posts = await data.json();

    const categories = [];
    posts.map((post, i) => {
      if (!categories.includes(post.userId)) {
        categories.push(post.userId);
      }

      // добавляем дополнительные поля
      posts[i] = { ...post, ordered: false, inCart: false };
    });

    setCategories(categories);
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // добавление заявки
  const setOrdered = (id) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, ordered: true } : post))
    );
  };

  // добавление а корзину
  const addToCart = (id) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, inCart: true } : post))
    );
  };

  return (
    <AppContext.Provider value={{ posts, categories, setOrdered, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
