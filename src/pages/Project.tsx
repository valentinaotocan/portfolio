import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import exclamation from "../assets/images/icons/exclamation-mark.png";
import useTitle from "../hooks/useTitle";

interface Post {
  html_url: string;
  name: string;
  description: string | null;
  topics: string[];
  language: string;
  created_at: string;
}

function Project() {
  const { t } = useTranslation();
  useTitle(t("header.projects"));

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
    <section className="projects pos-r mt-10xl plr-small ptb-custom">
      <div className="circle circle--small"></div>
      <h1 className="fs-xl pb-xl">Github projekti</h1>
      <div className="projects__cards">
        {posts.map((post) => {
          return (
            <div
              key={post.name}
              className="projects__cards__card flex flex-fd--c flex-jc--sb"
            >
              <div>
                <h2>Ime projekta: {post.name}</h2>
                <p className="ellipsis ellipsis--3">
                  <span className="fw-semiBold">Opis projekta: </span>
                  {post.description !== null ? post.description : "Nema"}
                </p>
                <p className="ellipsis">
                  <span className="fw-semiBold">Tagovi: </span>
                  {post.topics.length > 0 ? post.topics.join(", ") : "Nema"}
                </p>
                <p>
                  <span className="fw-semiBold">Najviše prevladava: </span>
                  {post.language}
                </p>
                <p>
                  <span className="fw-semiBold">Stvoreno: </span>{" "}
                  {formatDate(post.created_at)}
                </p>
              </div>
              <a href={post.html_url}>
                <button type="button" className="btn linear-bg sans-serif2">
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
