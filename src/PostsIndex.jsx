export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>ALL POSTS</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h2>{post.body}</h2>
          <img src={post.image} />
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
