import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import exclamation from '../assets/images/icons/exclamation-mark.png';

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

  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const formattedDate = `${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}.`;

    return formattedDate;
  };

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
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error">
        <img src={exclamation} alt="Error" />
        <p className="fs-xl">Nešto nije u redu.</p>
        <p>Pogreška u dohvaćanju informacija s poslužitelja.</p>
      </div>
    );
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
                <p>
                  Opis projekta:{" "}
                  {post.description !== null ? post.description : "Nema"}
                </p>
                <p>
                  Tagovi:{" "}
                  {post.topics.length > 0 ? post.topics.join(", ") : "Nema"}
                </p>
                <p>Najviše prevladava: {post.language}</p>
                <p>Stvoreno: {formatDate(post.created_at)}</p>
              </div>
              <a href={post.html_url}>
                <button type="button" className="btn linear-bg">
                  Vidi više
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Project;
