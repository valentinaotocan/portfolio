import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import useTitle from "../hooks/useTitle";
import ProjectErrorMessage from "../components/ProjectErrorMessage";

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
    return <ProjectErrorMessage />;
  }

  return (
    <section className="projects pos-r mt-10xl plr-small ptb-custom">
      <div className="circle circle--small"></div>
      <h1 className="fs-xl pb-xl">Github {t("projects.heading")}</h1>
      <div className="projects__cards">
        {posts.map((post) => {
          return (
            <div
              key={post.name}
              className="projects__cards__card flex flex-fd--c flex-jc--sb"
            >
              <div>
                <h2>
                  {t("projects.title")}: {post.name}
                </h2>
                <p className="ellipsis ellipsis--3">
                  <span className="fw-semiBold">
                    {t("projects.description")}:{" "}
                  </span>
                  {post.description !== null ? post.description : "/"}
                </p>
                <p className="ellipsis">
                  <span className="fw-semiBold">{t("projects.tags")}: </span>
                  {post.topics.length > 0 ? post.topics.join(", ") : "/"}
                </p>
                <p>
                  <span className="fw-semiBold">
                    {t("projects.prevalent")}:{" "}
                  </span>
                  {post.language}
                </p>
                <p>
                  <span className="fw-semiBold">{t("projects.created")}: </span>{" "}
                  {formatDate(post.created_at)}
                </p>
              </div>
              <a href={post.html_url}>
                <button type="button" className="btn linear-bg sans-serif2">
                  {t("projects.more")}
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
