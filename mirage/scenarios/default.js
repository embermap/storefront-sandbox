export default function(server) {
  let posts = server.createList('post', 10);

  posts.forEach((post, i) => {
    server.createList('comment', i, { post });
  });
}
