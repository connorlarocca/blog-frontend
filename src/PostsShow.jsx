// import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleUpdatePost", params);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
    window.location.href = "#";
  };

  const handleClick = () => {
    props.onPostDestroy(props.post);
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>
      <form onSubmit={handleSubmit}>
        <h2>Edit Post</h2>
        <div>
          Title:{" "}
          <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image:{" "}
          <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit">Hit 'em With The Update</button>
      </form>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
