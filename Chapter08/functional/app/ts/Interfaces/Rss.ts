export interface IRssItem {
  description: string;
  link: string;
  pubdate: string;
  title: string;
}

export interface IFeed {
  title: string;
  items: IRssItem[];
}
