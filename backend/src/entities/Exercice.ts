export interface Exercise {
  id: string;
  name: string;
  description: string;
  category: {
    id: number;
    name: string;
  } | null;
  video?: string | null;
  image?: string | null;
}