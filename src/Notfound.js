import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <button>
        <Link to="/">Back to the Home page...</Link>
      </button>
    </div>
  );
};

export default Notfound;
