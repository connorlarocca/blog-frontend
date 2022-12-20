export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="text-center">All Posts</h1>
      <div className="posts row">
        {props.posts.map((post) => (
          <div className="col-4" key={post.id}>
            <h2>{post.title}</h2>
            <div>
              <img
                src={post.image}
                className="card-img-top rounded mx-auto d-block"
                alt=""
              />
            </div>
            {/* <h4 className="card-text text-center">{post.body}</h4> */}
            <div className="d-grid gap-2 mx-auto">
              <button
                className="btn btn-info"
                onClick={() => props.onSelectPost(post)}
              >
                MORE INFO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
