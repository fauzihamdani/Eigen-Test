export interface Source {
   id: number;
   name: string;
}

export interface Articles {
   source: Source;
   author: string;
   title: string;
   description: string;
   url: string;
   urlToImage: string;
   publishedAt: string;
   content: string;
}

export interface News {
   status: string;
   totalResults: string;
   articles: Articles[];
}
