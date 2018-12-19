export default function(server) {
  server.timing = 2000;
  
  let posts = server.createList('post', 10);

  posts.forEach((post, i) => {
    server.createList('comment', i, { post });
  });
}
