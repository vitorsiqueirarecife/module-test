import { getPosts } from "../src";

getPosts({ id: 2 }).then((res) => {
  console.log(res);
});
