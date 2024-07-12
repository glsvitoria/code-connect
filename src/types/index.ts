export type Post = {
  id: string;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  likes: number;
  comments: CommentType[];
};

export type Author = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

export type CommentType = {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  postId: string;
  parentId: string | null;
};

export type PostWithCommentsChildrenType = {
  id: string;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  likes: number;
  comments: CommentWithChildrenType[];
};

export type CommentWithChildrenType = {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  postId: string;
  parentId: string | null;
  children: CommentType[];
};
