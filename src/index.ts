import { GetPostResponse, GetPostRequest } from "./types";

const getPosts = async ({ id }: GetPostRequest): Promise<GetPostResponse> => {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/todos/" + id).then(
      (response) => response.json()
    );
  } catch (e) {
    console.log("myModule.getPosts: ", e);
    throw e;
  }
};

export { getPosts };
