import React, { useEffect, useRef, useState } from "react";

export default function WorkerDemo(){
  const [result, setResult] = useState(null);
  const workerRef = useRef(null);

  useEffect(() => {
    // assumes worker.js is available at public/worker.js
    workerRef.current = new Worker("/worker.js");
    workerRef.current.onmessage = (e) => setResult(e.data);
    const id = setInterval(() => {
      workerRef.current.postMessage({ n: 500000 });
    }, 10 * 1000);
    return () => {
      clearInterval(id);
      workerRef.current.terminate();
    };
  }, []);

  return <div>
    <h2>Worker Demo</h2>
    <pre>{result ? JSON.stringify(result, null, 2) : "Waiting..."}</pre>
  </div>;
}
