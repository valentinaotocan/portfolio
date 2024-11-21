export interface Post {
  html_url: string;
  name: string;
  description: string | null;
  topics: string[];
  language: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectCardProps {
  post: Post;
  t: (key: string) => string;
  formatDate: (dateString: string) => string;
}
