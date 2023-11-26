interface Project {
  slug: string;
  frontmatter: {
    title: string;
    coverImage: any;
    role: string;
    time: string;
    shortDescription: string;
    images: string[];
    date: string;
    url: string;
    github?: string;
  };
}
