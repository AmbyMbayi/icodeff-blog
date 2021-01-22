import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Amby");

  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label for="">Blog title:</label>
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
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
