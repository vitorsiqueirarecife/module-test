export type GetPostRequest = {
  id: number;
};

export type GetPostResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
