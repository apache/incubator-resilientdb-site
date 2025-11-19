export type Publication = {
  id: number;
  name: string;
  year: number | string;
  venue: string;
  content: string;
  publink: string;
  award: string;
  flyer?: string;
};
