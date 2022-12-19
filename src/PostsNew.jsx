// import axios from "axios";
// import { useState } from "react";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onPostCreate(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="formGroupExampleInput">Title</label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Gimme a title! Something that'll hook a reader!"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Body</label>
          <input
            name="body"
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Here is the meat of your blog post!"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput3">Image URL</label>
          <input
            name="image"
            type="text"
            class="form-control"
            id="formGroupExampleInput3"
            placeholder="Put the link for your image here!"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
