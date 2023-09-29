import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 0,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/83289692?v=4",
      name: "Eduardo Fischer",
      role: "Dev. Junior",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-09-25 13:00:00"),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
      name: "User",
      role: "Dev. Pleno",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-09-23 10:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post
              key={post.id}
              post={post}
            />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
