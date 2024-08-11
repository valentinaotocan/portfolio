import { ProjectCardProps } from "../types";

function ProjectCard({ post, t, formatDate }: ProjectCardProps) {
  return (
    <div className="projects__cards__card flex flex-fd--c flex-jc--sb">
      <div>
        <h2>
          {t("projects.title")}: {post.name}
        </h2>
        <p className="ellipsis ellipsis--3">
          <span className="fw-semiBold">{t("projects.description")}: </span>
          {post.description !== null ? post.description : "/"}
        </p>
        <p className="ellipsis">
          <span className="fw-semiBold">{t("projects.tags")}: </span>
          {post.topics.length > 0 ? post.topics.join(", ") : "/"}
        </p>
        <p>
          <span className="fw-semiBold">{t("projects.prevalent")}: </span>
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
}

export default ProjectCard;
