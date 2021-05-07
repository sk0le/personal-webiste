export interface BlogPost {
  content: string;
  data: {
    created_at: string;
    long_read: string;
    title: string;
    slug: string;
    img: string;
    desc: string;
  };
}
