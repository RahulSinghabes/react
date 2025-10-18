import { useState } from "react";
import "./App.css";
import "./hooks/usefetch";
import { useFetch } from "./hooks/usefetch";
function App() {
  const [count, setCount] = useState(1);
  const { post, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + count,
    10
  );
  return (
    <>
      {loading ? (
        <img
          src={
            "https://img.freepik.com/premium-vector/vector-loading-icon-vector-editable-element-design_898898-180.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt="loader"
          style={{ height: 100, width: 100 }}
        />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>{JSON.stringify(post.title)}</p>
          <button
            onClick={() => {
              setCount(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setCount(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setCount(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setCount(100209);
            }}
          >
            4
          </button>
        </>
      )}
    </>
  );
}

export default App;
