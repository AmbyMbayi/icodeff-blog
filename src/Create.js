import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("amby");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog title:</label>
        <textarea
          name="title"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>BLog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="amby">amby</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
