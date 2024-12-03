import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import useTitle from "../hooks/useTitle";
import ProjectErrorMessage from "../components/ProjectErrorMessage";
import ProjectCard from "../components/ProjectCard";
import { formatDate } from "../utils/dateUtils";
import { Post } from "../types";

function Projects() {
  const { t } = useTranslation();
  useTitle(t("header.projects"));

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
        {posts.map((post) => (
          <ProjectCard
            key={post.name}
            post={post}
            t={t}
            formatDate={formatDate}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
