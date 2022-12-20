import axios from "axios";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("gimme the BLOGS");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleUpdatePost = (id, params) => {
    axios
      .patch(`http://localhost:3000/posts/${id}.json`, params)
      .then((response) => {
        setPosts(
          posts.map((post) => {
            if (post.id === response.data.id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
        handleHidePost();
      });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}`).then((response) => {
      console.log(response);
      setPosts(posts.filter((p) => p.id != post.id));
      handleHidePost();
    });
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow
          post={currentPost}
          onUpdatePost={handleUpdatePost}
          onPostDestroy={handleDestroyPost}
        />
      </Modal>
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
