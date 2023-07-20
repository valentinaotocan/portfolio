import { useEffect, useState } from "react";

interface Post {
  html_url: string;
  name: string;
  description: string | [];
  topics: string[];
  language: string;
  created_at: string;
}

function Project() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/valentinaotocan/repos"
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data from GitHub API.</div>;
  }

  return (
    <section className="ptb-custom plr-custom">
      <h1 className="fs-xl pb-sm">Github projekti</h1>
      <div className="cards">
        {posts.map((post) => {
          return (
            <div key={post.name} className="cards__card">
              <div>
                <h2>Ime projekta: {post.name}</h2>
                <p>Opis projekta: {post.description !==null ? post.description : 'Nema'}</p>
                <p>
                  Tagovi:{" "}
                  {post.topics.length > 0
                    ? post.topics.join(", ")
                    : "Nema"}
                </p>
                <p>Najviše prevladava: {post.language}</p>
                <p>Stvoreno: {post.created_at}</p>
              </div>
              <a href={post.html_url}>
                <button>Vidi više</button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Project;
