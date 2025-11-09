import React, { useEffect, useState, useRef } from "react";

export default function PollingExample() {
  const [quote, setQuote] = useState(null);
  const timerRef = useRef(null);

  async function fetchQuote() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const json = await res.json();
      setQuote(json);
    } catch (err) {
      console.error("fetch error", err);
    }
  }

  useEffect(() => {
    function start() {
      fetchQuote();
      timerRef.current = setInterval(fetchQuote, 15 * 1000);
    }
    function stop() {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    function handleVisibility() {
      if (document.visibilityState === "visible") start();
      else stop();
    }
    document.addEventListener("visibilitychange", handleVisibility);
    start();
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div>
      <h2>Random Quote (updates every 15s)</h2>
      {quote ? <blockquote>{quote.content} — <small>{quote.author}</small></blockquote> : <p>Loading...</p>}
    </div>
  );
}