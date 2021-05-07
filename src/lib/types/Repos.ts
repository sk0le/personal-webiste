export interface Repo {
  name: string;
  description: string | null;
  url: string;
  language: string | null | undefined;
  created: string | null | undefined;
  webiste: string | null | undefined;
  readme?: string;
}
