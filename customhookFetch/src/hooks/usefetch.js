import { useEffect } from "react";
import { useState } from "react";
//In React, when you use setInterval inside useEffect, you should return a cleanup function that clears the interval.
export function useFetch(url, retrytime) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetcher() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);
      // response is a Response object that contains information about the HTTP request.
      // response.ok is a boolean that is true if the HTTP status code is in the range 200–299.
      // If the server returned 404, 500, 403, etc., response.ok will be false.
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const json = await response.json();
      setPost(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetcher();
  }, [url]);
  useEffect(() => {
    const interval = setInterval(fetcher, retrytime * 1000);

    // Cleanup when component unmounts or retrytime changes
    return () => clearInterval(interval);
  }, [retrytime, url]);
  return {
    post: post,
    loading: loading,
    error: error,
  };
}
