export interface IComment {
  id: string;
  text: string;
  likes: number;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  comments: IComment[];
}

export interface IParent {
  posts: IPost[];
  comments: IComment[];
}
