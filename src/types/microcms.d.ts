// src/types/microcms.ts
export type Post = {
    id: string;
    title: string;
    body: string;
    publishedAt: string;
    category: Category;
};

// src/types/microcms.ts
export type Category = {
    id: string;
    name: string;
    icon: string;
};