import { useEffect, useState } from "react";
import axios from "axios";

const EventManagement = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  const handleTogglePosts = () => {
    setShowPosts(!showPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9000/events");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:9000/events",
        {
          title,
          content,
          author: "admin",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPosts((prevPosts) => [...prevPosts, response.data]);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (postId) => {
    const editingPost = posts.find((post) => post._id === postId);
    if (editingPost) {
      setEditingPostId(postId);
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    clearForm();
  };

  const handleUpdate = async (postId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:9000/events/${postId}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? response.data : post))
      );

      handleCancelEdit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:9000/events/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-5 mt-4">Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input
                className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content:</label>
              <textarea
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              {editingPostId !== null ? (
                <div>
                  <button
                    className="btn btn-primary me-2"
                    type="button"
                    onClick={() => handleUpdate(editingPostId)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2 className="text-center">Posts</h2>
          <div className="text-center mb-3">
            <button
              className="btn btn-secondary"
              onClick={handleTogglePosts}
            >
              {showPosts ? "Hide Posts" : "Show Posts"}
            </button>
          </div>
          {showPosts && (
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(post._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
